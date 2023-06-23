package com.stackoverflow.stackoverflowclone.comment.controller;

import com.stackoverflow.stackoverflowclone.comment.dto.CommentDto;
import com.stackoverflow.stackoverflowclone.comment.entity.Comment;
import com.stackoverflow.stackoverflowclone.comment.mapper.CommentMapper;
import com.stackoverflow.stackoverflowclone.comment.service.CommentService;
import com.stackoverflow.stackoverflowclone.member.service.MemberService;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@Slf4j
@RequestMapping("/questions/{question-id}/comments")
public class CommentController {
    private final CommentMapper commentMapper;
    private final CommentService commentService;
    private final QuestionService questionService;
    private final MemberService memberService;
    private static final Logger LOGGER = LoggerFactory.getLogger(CommentController.class);
    private static final String COMMENT_DEFAULT_URL = "/questions/{question-id}/comments";

    public CommentController(CommentMapper commentMapper, CommentService commentService, QuestionService questionService, MemberService memberService) {
        this.commentMapper = commentMapper;
        this.commentService = commentService;
        this.questionService = questionService;
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentDto.Post request,
                                      @Positive @PathVariable("question-id") long questionId){
        LOGGER.info("q id is {}", questionId);
        Comment comment = commentMapper.commentPostToComment(request);
        comment.setQuestion(questionService.findVerifiedQuestion(questionId));
        comment.setMember(memberService.findVerifiedMember(request.getMemberId()));
        LOGGER.info("c_id: {}",comment.getCommentId());
        LOGGER.info("member: {}",comment.getMember());
        LOGGER.info("question: {}",comment.getQuestion());
        commentService.createComment(comment);

        URI location = UriComponentsBuilder
                .newInstance()
                .path(COMMENT_DEFAULT_URL)
                .buildAndExpand(questionId)
                .toUri();

        return ResponseEntity.created(location).build();

    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@Valid @RequestBody CommentDto.Patch request,
                                       @Positive @PathVariable("comment-id") long commentId){
        request.setCommentId(commentId);
        Comment comment = commentMapper.commentPatchToComment(request);
        commentService.updateComment(comment);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(@Positive @PathVariable("comment-id") long commentId){
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
