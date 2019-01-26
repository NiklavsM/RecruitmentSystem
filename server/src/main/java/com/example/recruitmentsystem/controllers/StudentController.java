package com.example.recruitmentsystem.controllers;

import com.example.recruitmentsystem.models.Student;
import com.example.recruitmentsystem.repositories.StudentRepository;
import com.example.recruitmentsystem.services.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("server/api/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private EmailServiceImpl emailServiceImpl;

    @GetMapping
    public List<Student> list() {
        return studentRepository.findAll();
    }

    //Creates student entry and sends a sign-up email
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Student student) {
        studentRepository.save(student);
        try {
            emailServiceImpl.sendEmail(student);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @GetMapping("/{id}")
    public Student get(@PathVariable("id") long id) {
        return studentRepository.getOne(id);
    }

}
