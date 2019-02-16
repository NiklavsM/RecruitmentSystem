package com.example.recruitmentsystem.repositories;

import com.example.recruitmentsystem.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository  extends JpaRepository<Student, Long> {
    Student findByLoginToken(String login_token);
    List<Student> findByGender(String gender);
}
