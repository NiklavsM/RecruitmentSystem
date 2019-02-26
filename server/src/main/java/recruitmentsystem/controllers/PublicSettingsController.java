package recruitmentsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import recruitmentsystem.models.Settings;
import recruitmentsystem.repositories.SettingsRepository;

import java.util.List;

@RestController
@RequestMapping("server/public/settings")
public class PublicSettingsController {
    @Autowired
    SettingsRepository settingsRepository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Settings getSettings(){
        List<Settings> s = settingsRepository.findAll();
        if(!s.isEmpty()){
            return s.get(0);
        }
        return null;
    }
}
