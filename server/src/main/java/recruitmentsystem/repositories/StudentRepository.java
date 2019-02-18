package recruitmentsystem.repositories;

import org.springframework.data.jpa.repository.Query;
import recruitmentsystem.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByLoginToken(String login_token);

    List<Student> findByGender(String gender);

    @Query(value = "SELECT s FROM Student s WHERE first_name = ?1")
    List<Student> findByFirstName(String name);

    @Query(value = "SELECT s FROM Student s WHERE created_at BETWEEN ?1 AND ?2")
    List<Student> getByDate(String from, String to);
}
