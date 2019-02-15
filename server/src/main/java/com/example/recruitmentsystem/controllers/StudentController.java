package com.example.recruitmentsystem.controllers;

import com.example.recruitmentsystem.models.DBFile;
import com.example.recruitmentsystem.models.Email;
import com.example.recruitmentsystem.models.Student;
import com.example.recruitmentsystem.repositories.DBFileRepository;
import com.example.recruitmentsystem.repositories.StudentRepository;
import com.example.recruitmentsystem.services.DBFileStorageService;
import com.example.recruitmentsystem.services.EmailServiceImpl;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("server/api/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private DBFileStorageService dbFileStorageService;
    @Autowired
    private DBFileRepository dbFileRepository;
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

    @PostMapping("attachments")
    @ResponseStatus(HttpStatus.OK)
    public void updateCv(@RequestHeader("Authorization") String loginToken, @RequestParam("file") MultipartFile file) {

        try {
            DBFile dbfile = new DBFile(file.getOriginalFilename(), file.getContentType(), file.getBytes());
            dbfile.setStudent(studentRepository.findByLoginToken(loginToken));
            dbFileRepository.save(dbfile);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    @GetMapping("attachments/{studentid}")
    @ResponseStatus(HttpStatus.OK)
    public List<DBFile> getAttachments(@PathVariable("studentid") long studentid) {
        return dbFileRepository.findByStudentId(studentid);
        // return dbFileRepository.findByStudentId(id);
    }

    @GetMapping("attachment/{id}")
    public ResponseEntity getAttachment(@PathVariable("id") long id) {
        Optional<DBFile> fileOptional = dbFileRepository.findById(id);

        if (fileOptional.isPresent()) {
            DBFile file = fileOptional.get();
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFileName() + "\"")
                    .body(file.getData());
        }

        return ResponseEntity.status(404).body(null);

    }

}
