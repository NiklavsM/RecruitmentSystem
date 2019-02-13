package com.example.recruitmentsystem.controllers;

import com.example.recruitmentsystem.models.DBFile;
import com.example.recruitmentsystem.models.Email;
import com.example.recruitmentsystem.models.Student;
import com.example.recruitmentsystem.repositories.StudentRepository;
import com.example.recruitmentsystem.services.DBFileStorageService;
import com.example.recruitmentsystem.services.EmailServiceImpl;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("server/api/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private DBFileStorageService DBFileStorageService;
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

    @PostMapping("cv/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateCv(@PathVariable("id") long id, @RequestParam("cv") MultipartFile cv){
      //  dbfileRepository.save(cv);
        DBFile file = DBFileStorageService.storeFile(cv);
        Student s = new Student();
        s.setFirstName("Whaat");
        Student student = studentRepository.save(s);
        student.setCv(DBFileStorageService.getFile(file.getId()));
        System.out.println(file.getFileName() +"   " + student.getFirstName() + "   " + student.getCv().getFileName());
        Student s2 = studentRepository.saveAndFlush(student);
        System.out.println(s2.getId() +  s2.getCv().getFileName());
//        System.out.println("WHAAT " + studentRepository.getOne(id).getCv().getFileName());
    }

}
