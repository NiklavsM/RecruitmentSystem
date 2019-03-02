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
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import recruitmentsystem.models.Settings;
import recruitmentsystem.repositories.SettingsRepository;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(PublicSettingsController.class)

@AutoConfigureMockMvc(secure = false)
public class PublicSettingsControllerUT {


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
    public void settingsGetOk() throws Exception {
        Mockito.when(settingsRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(MockMvcRequestBuilders
                .get("/server/public/settings/")
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }

    @Test
    public void settingsGetSettingsPresentOk() throws Exception {
        List<Settings> settings = new LinkedList<>();
        settings.add(new Settings());
        Mockito.when(settingsRepository.findAll()).thenReturn(settings);
        mockMvc.perform(MockMvcRequestBuilders
                .get("/server/public/settings/")
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().is(200))
                .andReturn();
    }


}
