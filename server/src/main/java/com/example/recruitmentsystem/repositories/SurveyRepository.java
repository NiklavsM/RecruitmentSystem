package com.example.recruitmentsystem.repositories;

import com.example.recruitmentsystem.models.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SurveyRepository extends JpaRepository<Survey, Long> {
    List<Survey> findByStudentId(Long id);
}
