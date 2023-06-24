package com.stackoverflow.stackoverflowclone.answer.controller;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.answer.mapper.AnswerMapper;
import com.stackoverflow.stackoverflowclone.answer.service.AnswerService;
import com.stackoverflow.stackoverflowclone.dto.SingleResponseDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/questions/{question-id}/answers")
@Validated
public class AnswerController {
    private final static String ANSWER_DEFAULT_URL = "/questions/{question-id}/answers";
    private final AnswerMapper answerMapper;
    private final AnswerService answerService;

    private static final Logger logger = LoggerFactory.getLogger(AnswerController.class);

    public AnswerController(AnswerMapper answerMapper, AnswerService answerService) {
        this.answerMapper = answerMapper;
        this.answerService = answerService;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post request,
                                     @Positive @PathVariable("question-id") long questionId) {
        //TODO:
        request.setQuestionId(questionId);
        answerService.createAnswer(answerMapper.answerPostToAnswer(request));

        URI location = UriComponentsBuilder
                .newInstance()
                .path(ANSWER_DEFAULT_URL)
                .buildAndExpand(questionId)
                .toUri();
        return ResponseEntity.created(location).build();
    }

    //TODO: 본인이 아닐경우의 처리 추가
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerDto.Patch request,
                                      @Positive @PathVariable("answer-id") long answerId) {
        request.setAnswerId(answerId);
        Answer answer = answerMapper.answerPatchToAnswer(request);
        answerService.updateAnswer(answer);
        return ResponseEntity.ok().build();
    }

    //TODO: 본인이 아닐경우의 처리 추가
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@Positive @PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @GetMapping //여기서 필요없을거같지만 일단구현...
    public ResponseEntity getAnswers(@PathVariable("question-id") long questionId) {
        logger.info("questionId: {}", questionId);
        List<Answer> answers = answerService.findAnswers(questionId);

        for (Answer answer : answers) {
            logger.info("answer_id= {}", answer.getAnswerId());
        }

        return new ResponseEntity<>( //페이징 처리 안해서 일단 singleresponse반환
                new SingleResponseDto<>(answerMapper.answersToAnswerResponses(answers)),
                HttpStatus.OK);
    }

}
