package recruitmentsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import recruitmentsystem.models.Settings;
import recruitmentsystem.repositories.SettingsRepository;

import java.util.List;

@RestController
@RequestMapping("/server/api/settings")
public class SettingsController {
    @Autowired
    SettingsRepository settingsRepository;

    @GetMapping
    public Settings getSettings(){
        List<Settings> s = settingsRepository.findAll();
        if(!s.isEmpty()){
            return s.get(0);
        }
        return null;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void setSettings(@RequestBody Settings settings){
        settingsRepository.save(settings);
    }
}
