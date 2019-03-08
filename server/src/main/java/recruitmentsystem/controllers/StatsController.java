package recruitmentsystem.controllers;

import javafx.util.Pair;
import org.springframework.web.bind.annotation.*;
import recruitmentsystem.models.DatePair;
import recruitmentsystem.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
@RequestMapping("server/secure/stats")
public class StatsController {

    @Autowired
    private StudentRepository studentRepository;

    // Returns gender chart data
    @PostMapping("/genderstats")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, Integer> getGenderChartInfo(@RequestBody List<String> genders) {
        Map<String, Integer> genderMap = new HashMap<>();
        for (String gender : genders) {
            genderMap.put(gender, studentRepository.findByGender(gender).size());
        }
        return genderMap;
    }

    // Returns signup graph data
    @PostMapping("/signupstats")
    @ResponseStatus(HttpStatus.OK)
    public List<Integer> getSignupChartInfo(@RequestBody List<DatePair> dates) {
        List<Integer> stats = new LinkedList<>();
        for (DatePair datePair : dates) {
            stats.add(studentRepository.getByDate(datePair.getFromDate(), datePair.getToDate()).size());
        }
        return stats;
    }

    // Returns ethnicity chart data
    @PostMapping("/ethnicitystats")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, Integer> getEthnicityInfo(@RequestBody List<String> ethnicities) {
        Map<String, Integer> stats = new HashMap<>();
        for (String ethnicity : ethnicities) {
            stats.put(ethnicity, studentRepository.findByEthnicity(ethnicity).size());
        }
        return stats;
    }

}
