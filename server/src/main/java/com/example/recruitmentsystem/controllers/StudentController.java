package com.example.recruitmentsystem.controllers;

import com.example.recruitmentsystem.models.Student;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @GetMapping
    public List<Student> list(){
        List<Student> students = new ArrayList<>();
        return students;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Student student){

    }

    @GetMapping("/{id}")
    public Student get(@PathVariable("id") long id){
        return new Student();
    }

}
