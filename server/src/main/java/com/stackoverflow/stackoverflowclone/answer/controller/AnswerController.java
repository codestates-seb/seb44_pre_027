package com.stackoverflow.stackoverflowclone.answer.controller;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.answer.mapper.AnswerMapper;
import com.stackoverflow.stackoverflowclone.answer.service.AnswerService;
import com.stackoverflow.stackoverflowclone.utils.UriCreator;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/questions/{question-id}/answers") // api명세서와 다름
@Validated
public class AnswerController {
    private final static String ANSWER_DEFAULT_URL = "questions/{question-id}/answers";
    private final AnswerMapper answerMapper;
    private final AnswerService answerService;

    public AnswerController(AnswerMapper answerMapper, AnswerService answerService) {
        this.answerMapper = answerMapper;
        this.answerService = answerService;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post request,
                                     @Positive @PathVariable("question-id") long questionId) {

        request.setQuestionId(questionId);
        Answer createdAnswer = answerService.createAnswer(answerMapper.answerPostToAnswer(request));
        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, createdAnswer.getAnswerId());

        return ResponseEntity.created(location).build();
    }
    /*
        고려할것... 답변 작성자가 아닐경우의 처리
     */
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerDto.Patch request,
                                      @Positive @PathVariable("answer-id") long answerId)  {
        request.setAnswerId(answerId);
        answerService.update answerMapper.answerPatchToAnswer(request);
        return ResponseEntity;
    }

/*
    @PostMapping
    public ResponseEntity postAnswer() {
        return ResponseEntity;
    }

    @PostMapping
    public ResponseEntity postAnswer() {
        return ResponseEntity;
    }
 */
}
