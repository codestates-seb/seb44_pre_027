package com.stackoverflow.stackoverflowclone.question.repository;

import com.stackoverflow.stackoverflowclone.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    /** 답변이 1개라도 달린 질문은 삭제할 수 없다 **/
    int deleteByAnswersIsEmptyAndQuestionId(long questionId);

    /** pagination 사용 **/
    Page<Question> findAll(Pageable pageable);


    /** 질문 제목이나 본문에 해당 단어 (keyword)가 포함되면 검색 **/
    @Query("SELECT q FROM Question q WHERE q.title LIKE %:keyword% OR q.content LIKE %:keyword%")
    Page<Question> searchByKeyword(@Param("keyword") String keyword, Pageable pageable);
}
