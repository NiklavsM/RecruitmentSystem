package recruitmentsystem.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import recruitmentsystem.RecruitmentSystemApplication;
import recruitmentsystem.config.SecurityConfiguration;
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

    @Test
    public void statGenderStatsOk() throws Exception {
        Mockito.when(studentRepository.findAll()).thenReturn(Collections.emptyList());
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/stats/genderstats/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content("[ \"Male\", \"Female\", \"Rather Not Say\" ]")
                .characterEncoding("utf-8")).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void statGenderStats400() throws Exception {
        Mockito.when(studentRepository.findAll()).thenReturn(Collections.emptyList());
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/stats/genderstats/")
                .accept(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")).andExpect(status().is(400))
                .andReturn();
    }
    @Test
    public void statGenderStats404() throws Exception {
        Mockito.when(studentRepository.findAll()).thenReturn(Collections.emptyList());
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/stats/genderstats/nonexistent")
                .accept(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")).andExpect(status().is(404))
                .andReturn();
    }

}
