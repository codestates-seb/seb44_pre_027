package com.stackoverflow.stackoverflowclone.question.repository;

import com.stackoverflow.stackoverflowclone.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    /** 답변이 1개라도 달린 질문은 삭제할 수 없다 **/
    int deleteByAnswersIsEmptyAndQuestionId(long questionId);

    /** pagination 사용 **/
    Page<Question> findAll(Pageable pageable);
}
