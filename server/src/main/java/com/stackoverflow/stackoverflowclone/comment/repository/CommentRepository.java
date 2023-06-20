package com.stackoverflow.stackoverflowclone.comment.repository;

import com.stackoverflow.stackoverflowclone.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    @Query(nativeQuery = true,
    value = "SELECT * FROM COMMENT WHERE question_id = :questionId")
    List<Comment> findAll(@Param("questionId") long questionId);
}
