package recruitmentsystem.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import recruitmentsystem.models.DBFile;
import recruitmentsystem.models.Email;
import recruitmentsystem.models.Student;
import recruitmentsystem.models.Survey;
import recruitmentsystem.repositories.DBFileRepository;
import recruitmentsystem.repositories.StudentRepository;
import recruitmentsystem.repositories.SurveyRepository;
import recruitmentsystem.services.EmailServiceImpl;

import java.io.IOException;

@RestController
@RequestMapping("server/public/students")
public class PublicStudentController {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private EmailServiceImpl emailServiceImpl;
    @Autowired
    private DBFileRepository dbFileRepository;
    @Autowired
    private SurveyRepository surveyRepository;

    //Creates student entry and sends a sign-up email
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Student student) {
        studentRepository.save(student);

        try {
            emailServiceImpl.sendEmail(
                    new Email(
                            student.getEmail(),
                            "Dear " + student.getFirstName() + ",\nThanks for sending your details. To add CV and complete  a personality test please follow the link: " +
                                    "http://recruitmentapp-env.zufas2d86p.eu-west-2.elasticbeanstalk.com/extrainfo/" + student.getLoginToken()));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @PostMapping("survey")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity uploadSurvey(@RequestHeader("Authorization") String loginToken, @RequestBody Survey survey) {
        Student student = studentRepository.findByLoginToken(loginToken);
        if (surveyRepository.findByStudentId(student.getId()).isEmpty()) {
            survey.setStudent(student);
            surveyRepository.save(survey);
            return ResponseEntity.ok().header(HttpHeaders.ACCEPT).body("Survey submitted");
        }
        return ResponseEntity.ok().header(HttpHeaders.ACCEPT).body("Submission failed: survey already submitted");
    }

    @PostMapping("attachments")
    @ResponseStatus(HttpStatus.OK)
    public void uploadAttachments(@RequestHeader("Authorization") String loginToken, @RequestParam("file") MultipartFile file) {

        try {
            Student student = studentRepository.findByLoginToken(loginToken);
            if (dbFileRepository.findByStudentId(student.getId()).size() < 5) { // allow only 5 files per student
                DBFile dbfile = new DBFile(file.getOriginalFilename(), file.getContentType(), file.getBytes());
                dbfile.setStudent(studentRepository.findByLoginToken(loginToken));
                dbFileRepository.save(dbfile);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}