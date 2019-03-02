package recruitmentsystem.controllers;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@RunWith(SpringRunner.class)
@WebMvcTest(ForwardController.class)

@AutoConfigureMockMvc(secure = false)
public class ForwardControllerUT {


    @Autowired
    MockMvc mockMvc;

    @Test
    public void genderStatsOk() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .post("/gibersihsdfdsf/")).andExpect(content().string("")) // just forwards to the client
                .andReturn();
    }


}
