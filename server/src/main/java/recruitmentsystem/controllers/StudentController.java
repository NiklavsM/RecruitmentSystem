package recruitmentsystem.controllers;

import recruitmentsystem.models.DBFile;
import recruitmentsystem.models.Email;
import recruitmentsystem.models.Student;
import recruitmentsystem.models.Survey;
import recruitmentsystem.repositories.DBFileRepository;
import recruitmentsystem.repositories.StudentRepository;
import recruitmentsystem.repositories.SurveyRepository;
import recruitmentsystem.services.DBFileStorageService;
import recruitmentsystem.services.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
    private SurveyRepository surveyRepository;
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

    @GetMapping("student/survey/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Map<String,Integer> getSurvey(@PathVariable("id") long id) {
        Map<String,Integer> traits = new HashMap<>();
        List<Survey> surveys = surveyRepository.findByStudentId(id); // TODO get one instead of List
        if(!surveys.isEmpty()) {
            Survey survey = surveys.get(0);
            traits.put("Agreeableness", survey.getAgreeableness());
            traits.put("Conscientiousness", survey.getConscientiousness());
            traits.put("Extroversion", survey.getExtroversion());
            traits.put("Neuroticism", survey.getNeuroticism());
            traits.put("Openness", survey.getOpenness());
        }
        return traits;
    }

    @PostMapping("survey")
    @ResponseStatus(HttpStatus.OK)
    public void uploadSurvey(@RequestHeader("Authorization") String loginToken, @RequestBody Survey survey) {
        survey.setStudent(studentRepository.findByLoginToken(loginToken));
        surveyRepository.save(survey);
    }

    @PostMapping("attachments")
    @ResponseStatus(HttpStatus.OK)
    public void uploadAttachments(@RequestHeader("Authorization") String loginToken, @RequestParam("file") MultipartFile file) {

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
    public List<DBFile> getAttachments(@PathVariable("studentid") Long studentid) {
        return dbFileRepository.findByStudentId(studentid);
    }

    @GetMapping("attachment/{id}")
    public ResponseEntity getAttachment(@PathVariable("id") Long id) {
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
