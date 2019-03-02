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
import recruitmentsystem.models.Settings;
import recruitmentsystem.repositories.SettingsRepository;
import recruitmentsystem.repositories.StudentRepository;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(SettingsController.class)

@AutoConfigureMockMvc(secure = false)
public class SettingsControllerUT {


    @Autowired
    MockMvc mockMvc;

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
    public void settingsPostOk() throws Exception {
        Settings body = new Settings();
        String requestJson = ow.writeValueAsString(body);
        Mockito.when(settingsRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/settings/")
                .accept(MediaType.APPLICATION_JSON).contentType(MediaType.APPLICATION_JSON).content(requestJson)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void settingsPostSettingsPresentOk() throws Exception {
        List<Settings> settings = new LinkedList<>();
        Settings body = new Settings();
        settings.add(body);
        String requestJson = ow.writeValueAsString(body);
        Mockito.when(settingsRepository.findAll()).thenReturn(settings);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/server/secure/settings/")
                .accept(MediaType.APPLICATION_JSON).contentType(MediaType.APPLICATION_JSON).content(requestJson)).andExpect(status().is(200))
                .andReturn();
    }


}
