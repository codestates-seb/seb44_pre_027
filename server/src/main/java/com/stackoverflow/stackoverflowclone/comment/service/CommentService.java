package com.stackoverflow.stackoverflowclone.comment.service;

import com.stackoverflow.stackoverflowclone.comment.entity.Comment;
import com.stackoverflow.stackoverflowclone.comment.repository.CommentRepository;
import com.stackoverflow.stackoverflowclone.exception.BusinessLogicException;
import com.stackoverflow.stackoverflowclone.exception.ExceptionCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) { return commentRepository.save(comment); }

    public Comment updateComment(Comment comment){
       Comment foundComment = findComment(comment.getCommentId());
       Optional.ofNullable(comment.getContent()).ifPresent(content -> foundComment.setContent(content));
       Optional.ofNullable(comment.getModifiedAt()).ifPresent(modifiedAt -> foundComment.setModifiedAt(modifiedAt));
       return commentRepository.save(foundComment);
    }

    public Comment findComment(long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        return optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
    }

    public void deleteComment(long commentId){
        commentRepository.deleteById(commentId);
    }

    public List<Comment> findComments(long questionId) {
        return commentRepository.findAll(questionId);
    }
}
