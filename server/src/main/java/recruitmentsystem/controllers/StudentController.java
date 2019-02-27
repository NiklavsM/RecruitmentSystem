package recruitmentsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import recruitmentsystem.models.DBFile;
import recruitmentsystem.models.Filter;
import recruitmentsystem.models.Student;
import recruitmentsystem.models.Survey;
import recruitmentsystem.repositories.DBFileRepository;
import recruitmentsystem.repositories.StudentRepository;
import recruitmentsystem.repositories.SurveyRepository;

import java.util.*;

@RestController
@RequestMapping("server/secure/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private DBFileRepository dbFileRepository;
    @Autowired
    private SurveyRepository surveyRepository;

    @GetMapping
    public List<Student> list() {
        return studentRepository.findAll();
    }

    //Returns list of filtered students
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Student> list(@RequestBody Filter filter) {
        List<Student> students = new ArrayList<>();
        for (Student student : studentRepository.getByDate(filter.getCreatedFrom() + " 00:00:00", filter.getCreatedTo() + " 23:59:59")) {
            boolean addStudent = true;
            if (filter.hasAttachments()) {
                if (dbFileRepository.findByStudentId(student.getId()).isEmpty()) {
                    addStudent = false;
                }
            }
            if (filter.hasPersonalityTest()) {
                if (surveyRepository.findByStudentId(student.getId()).isEmpty()) {
                    addStudent = false;
                }
            }
            if (addStudent) {
                students.add(student);
            }
        }
        return students;
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Student get(@PathVariable("id") long id) {
        return studentRepository.getOne(id);
    }

    @PostMapping("delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteStudent(@PathVariable("id") long id) {
        studentRepository.deleteById(id);
    }

    @PostMapping("delete")
    @ResponseStatus(HttpStatus.OK)
    public void deleteStudents(@RequestBody List<Long> students) {
        for (Long studentID : students) {
            studentRepository.deleteById(studentID);
        }
    }

    @GetMapping("student/survey/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, Integer> getSurvey(@PathVariable("id") long id) {
        Map<String, Integer> traits = new HashMap<>();
        List<Survey> surveys = surveyRepository.findByStudentId(id);
        if (!surveys.isEmpty()) {
            Survey survey = surveys.get(0); // TODO get one instead of List
            traits.put("Agreeableness", survey.getAgreeableness());
            traits.put("Conscientiousness", survey.getConscientiousness());
            traits.put("Extroversion", survey.getExtroversion());
            traits.put("Neuroticism", survey.getNeuroticism());
            traits.put("Openness", survey.getOpenness());
        }
        return traits;
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

    @PostMapping("attachments/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteAttachments(@PathVariable("id") long id) {
        dbFileRepository.deleteById(id);
    }


}
