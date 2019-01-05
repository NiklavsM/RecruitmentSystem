package com.example.recruitmentsystem.controllers;

import com.example.recruitmentsystem.models.Student;
import com.example.recruitmentsystem.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<Student> list(){
        System.out.println("HEREEE");
        return studentRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Student student){
        studentRepository.save(student);
    }

    @GetMapping("/{id}")
    public Student get(@PathVariable("id") long id){
        return studentRepository.getOne(id);
    }

}
