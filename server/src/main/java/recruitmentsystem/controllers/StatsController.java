package recruitmentsystem.controllers;

import javafx.util.Pair;
import org.springframework.web.bind.annotation.*;
import recruitmentsystem.models.DatePair;
import recruitmentsystem.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
@RequestMapping("server/api/stats")
public class StatsController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/genderstats")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, Integer> getGenderChartInfo() {
        Map<String, Integer> genderMap = new HashMap<>();
        genderMap.put("Male", studentRepository.findByGender("male").size());
        genderMap.put("Female", studentRepository.findByGender("female").size());
        genderMap.put("Other", studentRepository.findByGender("other").size());
        return genderMap;
    }

    @PostMapping("/signupstats")
    @ResponseStatus(HttpStatus.OK)
    public List<Integer> getSignupChartInfo(@RequestBody List<DatePair> dates) {
        List<Integer> stats = new LinkedList<>();
        for(DatePair datePair: dates){
            stats.add(studentRepository.getByDate(datePair.getFromDate(),datePair.getToDate()).size());
        }
        return stats;
    }


}
