package recruitmentsystem.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import recruitmentsystem.models.Student;
import recruitmentsystem.models.Survey;
import recruitmentsystem.repositories.DBFileRepository;
import recruitmentsystem.repositories.SettingsRepository;
import recruitmentsystem.repositories.StudentRepository;
import recruitmentsystem.repositories.SurveyRepository;
import recruitmentsystem.services.EmailService;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(PublicStudentController.class)

@AutoConfigureMockMvc(secure = false)
public class PublicStudentControllerUT {

    @Autowired
    MockMvc mockMvc;
    @MockBean
    StudentRepository studentRepository;
    @MockBean
    DBFileRepository dbFileRepository;
    @MockBean
    SurveyRepository surveyRepository;
    @MockBean
    EmailService emailService;
    @MockBean
    SettingsRepository settingsRepository;

    ObjectMapper mapper;
    ObjectWriter ow;

    @Before
    public void initialize() {
        mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ow = mapper.writer().withDefaultPrettyPrinter();
    }


    @Test
    public void studentCreateOk() throws Exception {
        Student body = new Student();
        String requestJson = ow.writeValueAsString(body);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/public/students/create")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void studentCreateStudentExistsOk() throws Exception {
        List<Student> students = new LinkedList<>();
        Student student = new Student();
        students.add(student);
        student.setEmail("email@email.com");
        String requestJson = ow.writeValueAsString(student);
        Mockito.when(studentRepository.findByEmail("email@email.com")).thenReturn(students);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/public/students/create")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void surveyCreateOk() throws Exception {
        Student s = new Student();
        Survey body = new Survey();
        String requestJson = ow.writeValueAsString(body);
        Mockito.when(surveyRepository.findByStudentId(1L)).thenReturn(Collections.emptyList());
        Mockito.when(studentRepository.findByLoginToken(s.getLoginToken())).thenReturn(s);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/public/students/survey/").header("Authorization", s.getLoginToken())
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void surveyCreateAlreadySubmittedOk() throws Exception {
        List<Survey> surveys = new LinkedList<>();
        Student s = new Student();
        s.setId(1L);
        Survey survey = new Survey();
        surveys.add(survey);
        String requestJson = ow.writeValueAsString(survey);
        Mockito.when(surveyRepository.findByStudentId(1L)).thenReturn(surveys);
        Mockito.when(studentRepository.findByLoginToken(s.getLoginToken())).thenReturn(s);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/public/students/survey/").header("Authorization", s.getLoginToken())
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void attachmentCreateOk() throws Exception {
        Student s = new Student();
        MockMultipartFile firstFile = new MockMultipartFile("file", "filename.txt", "text/plain", "some xml".getBytes());
        Mockito.when(dbFileRepository.findByStudentId(1L)).thenReturn(Collections.emptyList());
        Mockito.when(studentRepository.findByLoginToken(s.getLoginToken())).thenReturn(s);
        mockMvc.perform(MockMvcRequestBuilders
                .fileUpload("/server/public/students/attachments/").file(firstFile)
                .header("Authorization", s.getLoginToken())
        ).andExpect(status().is(200))
                .andReturn();


    }

}
