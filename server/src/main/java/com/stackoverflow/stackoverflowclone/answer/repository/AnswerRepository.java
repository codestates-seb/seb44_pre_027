package com.stackoverflow.stackoverflowclone.answer.repository;

import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface AnswerRepository extends JpaRepository<Answer, Long>{
//    @Query(value = "SELECT a FROM Answer a WHERE a.questionId = :questionId")
//    Page<Answer> findAnswers(Pageable page, @Param("question-id") long questionId);
    @Query(nativeQuery = true,
    value = "SELECT * FROM ANSWER WHERE question_id = :questionId")
    List<Answer> findAll(@Param("questionId") long questionId);

}