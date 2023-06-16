package com.stackoverflow.stackoverflowclone.answer.repository;

import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface AnswerRepository extends JpaRepository<Answer, Long>{
    /*
    @Query("SELECT * FROM ANSWER AS A WHERE A.QUESTION_ID = :questionId")
    Page<Answer> findAllAnswersInTheQuestion(Pageable page, @Param("question-id") long questionId);
     */
}