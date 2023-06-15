package com.stackoverflow.stackoverflowclone.answer.repository;

import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AnswerRepository extends JpaRepository<Answer, Long>{

}
