package recruitmentsystem.repositories;

import recruitmentsystem.models.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SurveyRepository extends JpaRepository<Survey, Long> {
    List<Survey> findByStudentId(Long id);
}
