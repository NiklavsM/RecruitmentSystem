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
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import recruitmentsystem.models.*;
import recruitmentsystem.repositories.DBFileRepository;
import recruitmentsystem.repositories.StudentRepository;
import recruitmentsystem.repositories.SurveyRepository;

import java.util.*;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(StudentController.class)

@AutoConfigureMockMvc(secure = false)
public class StudentControllerUT {

    @Autowired
    MockMvc mockMvc;
    @MockBean
    StudentRepository studentRepository;
    @MockBean
    DBFileRepository dbFileRepository;
    @MockBean
    SurveyRepository surveyRepository;
    ObjectMapper mapper;
    ObjectWriter ow;

    @Before
    public void initialize() {
        mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ow = mapper.writer().withDefaultPrettyPrinter();
    }

    @Test
    public void getStudentsOk() throws Exception {

        Mockito.when(studentRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(MockMvcRequestBuilders
                .get("/server/secure/students/")
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void getStudentsWithEmptyFilterOk() throws Exception {
        Filter body = new Filter();
        String requestJson = ow.writeValueAsString(body);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/students/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void getStudentsWithFullFilterStudentNotFound() throws Exception {
        List<Student> students = new LinkedList<>();
        Student s = new Student();
        s.setCourse("Computer Science");
        students.add(s);
        List<String> courses = new LinkedList<>();
        courses.add("Computer Science");
        Filter body = new Filter("", "", courses, true, true);
        String requestJson = ow.writeValueAsString(body);
        System.out.println("requestJson " + requestJson);
        Mockito.when(studentRepository.getByDate(" 00:00:00", " 23:59:59")).thenReturn(students);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/students/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(content().string("[]"))
                .andReturn();
    }

    @Test
    public void getStudentsWithFullFilterStudentFound() throws Exception {
        List<Student> students = new LinkedList<>();
        Student s = new Student();
        s.setCourse("Computer Science");
        students.add(s);
        List<String> courses = new LinkedList<>();
        courses.add("Computer Science");
        Filter body = new Filter("", "", courses, false, false);
        String requestJson = ow.writeValueAsString(body);
        System.out.println("requestJson " + requestJson);
        Mockito.when(studentRepository.getByDate(" 00:00:00", " 23:59:59")).thenReturn(students);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/students/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(content().json(ow.writeValueAsString(students)))
                .andReturn();
    }

    @Test
    public void getStudentsWithFullFilterStudentCourseNotFound() throws Exception {
        List<Student> students = new LinkedList<>();
        Student s = new Student();
        s.setCourse("Computer Science");
        students.add(s);
        List<String> courses = new LinkedList<>();
        courses.add("Architecture");
        Filter body = new Filter("", "", courses, false, false);
        String requestJson = ow.writeValueAsString(body);
        System.out.println("requestJson " + requestJson);
        Mockito.when(studentRepository.getByDate(" 00:00:00", " 23:59:59")).thenReturn(students);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/students/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(content().json("[]"))
                .andReturn();
    }

    @Test
    public void getStudentByIdOk() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                .get("/server/secure/students/{id}", 1)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void deleteStudentByIdOk() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/students/delete/{id}", 1)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void updateStudentByIdOk() throws Exception {
        Student body = new Student();
        String requestJson = ow.writeValueAsString(body);

        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/students/update/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void deleteStudentsOk() throws Exception {
        List<Long> body = new ArrayList<>();
        body.add(1L);
        String requestJson = ow.writeValueAsString(body);

        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/students/delete/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void studentsSurveyOk() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                .get("/server/secure/students/student/survey/{id}", 1L)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void studentsSurveyReturn() throws Exception {
        List<Survey> surveys = new LinkedList<>();
        surveys.add(new Survey(3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3));
        Mockito.when(surveyRepository.findByStudentId(1L)).thenReturn(surveys);
        mockMvc.perform(MockMvcRequestBuilders
                .get("/server/secure/students/student/survey/{id}", 1L)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(content().json("{'Conscientiousness':20,'Neuroticism':20,'Openness':20,'Extroversion':20,'Agreeableness':20}"))
                .andReturn();
    }

    @Test
    public void studentsAttachmentsOk() throws Exception {

        Mockito.when(studentRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(MockMvcRequestBuilders
                .get("/server/secure/students/attachments/{studentid}", 1L)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void studentsGetAttachmentNotPresentOk() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                .get("/server/secure/students/attachment/{id}", 1L)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void studentsGetAttachmentIsPresentOk() throws Exception {
        DBFile file = new DBFile();
        Mockito.when(dbFileRepository.findById(1L)).thenReturn(Optional.of(file));
        mockMvc.perform(MockMvcRequestBuilders
                .get("/server/secure/students/attachment/{id}", 1L)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void deleteAttachmentOk() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/students/attachments/delete/{id}", 1L)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }


}
