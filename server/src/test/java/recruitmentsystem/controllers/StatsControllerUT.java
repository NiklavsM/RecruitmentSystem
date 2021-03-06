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
import recruitmentsystem.models.DatePair;
import recruitmentsystem.repositories.StudentRepository;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(StatsController.class)

@AutoConfigureMockMvc(secure = false)
public class StatsControllerUT {


    @Autowired
    MockMvc mockMvc;

    @MockBean
    StudentRepository studentRepository;

    ObjectMapper mapper;
    ObjectWriter ow;

    @Before
    public void initialize() {
        mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ow = mapper.writer().withDefaultPrettyPrinter();
    }


    @Test
    public void genderStatsOk() throws Exception {
        Mockito.when(studentRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/stats/genderstats/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content("[ \"Male\", \"Female\", \"Rather Not Say\" ]")
                .characterEncoding("utf-8")).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void signupStatsOk() throws Exception {

        List<DatePair> body = new LinkedList<>();
        body.add(new DatePair("2019-2-01", "2019-2-31"));
        String requestJson = ow.writeValueAsString(body);

        Mockito.when(studentRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/stats/signupstats/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)
                .characterEncoding("utf-8")).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void ethnicityStatsOk() throws Exception {
        Mockito.when(studentRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/stats/ethnicitystats/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content("[ \"Caucasian\", \"Mixed\", \"Other\" ]")
                .characterEncoding("utf-8")).andExpect(status().is(200))
                .andReturn();
    }

}
