package com.example.recruitmentsystem.repositories;

import com.example.recruitmentsystem.models.DBFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DBFileRepository extends JpaRepository<DBFile, Long> {
    List<DBFile> findByStudentId(Long id);
}
