package recruitmentsystem.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import recruitmentsystem.models.Email;
import recruitmentsystem.services.EmailService;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(EmailController.class)

@AutoConfigureMockMvc(secure = false)
public class EmailControllerUT {


    @Autowired
    MockMvc mockMvc;

    @MockBean
    EmailService emailService;

    ObjectMapper mapper;
    ObjectWriter ow;

    @Before
    public void initialize() {
        mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ow = mapper.writer().withDefaultPrettyPrinter();
    }

    @Test
    public void emailOk() throws Exception {
        Email email = new Email("Test@email.com", "Subject", "Body");
        String jsonContent = ow.writeValueAsString(email);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/email").accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonContent)).andExpect(status().is(200))
                .andReturn();
    }


}
