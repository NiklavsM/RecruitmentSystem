package recruitmentsystem.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import recruitmentsystem.models.*;
import recruitmentsystem.repositories.DBFileRepository;
import recruitmentsystem.repositories.SettingsRepository;
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
    @Autowired
    private SettingsRepository settingsRepository;

    //Creates student entry and sends a sign-up email
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity create(@RequestBody Student student) {
        if (studentRepository.findByEmail(student.getEmail()).isEmpty()) {
            studentRepository.save(student);
            sendSignupEmail(student);
            return ResponseEntity.ok().header(HttpHeaders.ACCEPT).body("Submission was successful");
        }
        return ResponseEntity.ok().header(HttpHeaders.ACCEPT).body("Student with this email already exists");
    }

    // Sends signup email
    private void sendSignupEmail(Student student) {
        final String[] companyName = {""};
        settingsRepository.findById(1L).ifPresent(setting -> companyName[0] = setting.getCompanyName());
        emailServiceImpl.sendEmail(
                new Email(student.getEmail(), companyName[0],
                        "Dear " + student.getFirstName() + ",\nThanks for sharing your details. To add relevant attachments and complete a personality test please follow the link: " +
                                "http://recruitmentapp-env.zufas2d86p.eu-west-2.elasticbeanstalk.com/extrainfo/" + student.getLoginToken()));
    }

    // Saves the survey submitted by the student
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

    // Saves the attachment submitted by the student
    @PostMapping("attachments")
    @ResponseStatus(HttpStatus.OK)
    public void uploadAttachments(@RequestHeader("Authorization") String loginToken, @RequestParam("file") MultipartFile file) throws IOException {

        Student student = studentRepository.findByLoginToken(loginToken);
        if (dbFileRepository.findByStudentId(student.getId()).size() < 5) { // allow only 5 files per student
            DBFile dbfile = new DBFile(file.getOriginalFilename(), file.getContentType(), file.getBytes());
            dbfile.setStudent(studentRepository.findByLoginToken(loginToken));
            dbFileRepository.save(dbfile);
        }
    }

}