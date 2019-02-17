package com.example.recruitmentsystem.controllers;

import com.example.recruitmentsystem.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("server/api/stats")
public class StatsController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/genderchart")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, Integer> getGenderChartInfo() {
        Map<String, Integer> genderMap = new HashMap<>();
        genderMap.put("Male", studentRepository.findByGender("male").size());
        genderMap.put("Female", studentRepository.findByGender("female").size());
        genderMap.put("Other", studentRepository.findByGender("other").size());
        return genderMap;
    }

    @GetMapping("/signupchart")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, Integer> getSignupChartInfo() {
        Map<String, Integer> genderMap = new HashMap<>();
        genderMap.put("Male", studentRepository.findByGender("male").size());
        genderMap.put("Female", studentRepository.findByGender("female").size());
        genderMap.put("Other", studentRepository.findByGender("other").size());
        return genderMap;
    }


}
