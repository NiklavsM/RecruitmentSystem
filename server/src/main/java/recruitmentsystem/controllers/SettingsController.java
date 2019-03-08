package recruitmentsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import recruitmentsystem.models.Settings;
import recruitmentsystem.repositories.SettingsRepository;

import java.util.List;

@RestController
@RequestMapping("server/secure/settings")
public class SettingsController {
    @Autowired
    SettingsRepository settingsRepository;

    // Updates the system settings
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void setSettings(@RequestBody Settings settings) {
        List<Settings> sl = settingsRepository.findAll();
        if (sl.isEmpty()) {
            settingsRepository.save(settings);
        } else {
            Settings s = sl.get(0);
            s.setCompanyName(settings.getCompanyName());
            settingsRepository.save(s);
        }
    }
}
