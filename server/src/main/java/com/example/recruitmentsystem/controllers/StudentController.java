package com.example.recruitmentsystem.controllers;

import com.example.recruitmentsystem.models.Email;
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
            emailServiceImpl.sendEmail(
                    new Email(
                            student.getEmail(),
                            "Thanks for sending your details. To add CV, complete personality test or change details please follow the link: " +
                                    "http://recruitmentapp-env.zufas2d86p.eu-west-2.elasticbeanstalk.com/profile/" + student.getLoginToken()));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Student get(@PathVariable("id") long id) {
        return studentRepository.getOne(id);
    }

    @PostMapping("delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") long id) {
        studentRepository.deleteById(id);
    }

}
