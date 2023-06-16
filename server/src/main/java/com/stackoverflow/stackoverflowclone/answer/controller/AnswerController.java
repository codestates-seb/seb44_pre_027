package com.stackoverflow.stackoverflowclone.answer.controller;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.answer.mapper.AnswerMapper;
import com.stackoverflow.stackoverflowclone.answer.service.AnswerService;
import com.stackoverflow.stackoverflowclone.dto.SingleResponseDto;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import com.stackoverflow.stackoverflowclone.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/questions/{question-id}/answers")
@Validated
public class AnswerController {
    private final static String ANSWER_DEFAULT_URL = "questions/{question-id}/answers";
    private final AnswerMapper answerMapper;
    private final AnswerService answerService;
    private final QuestionService questionService;

    public AnswerController(AnswerMapper answerMapper, AnswerService answerService, QuestionService questionService) {
        this.answerMapper = answerMapper;
        this.answerService = answerService;
        this.questionService = questionService;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post request,
                                     @Positive @PathVariable("question-id") long questionId) {
        //TODO:
        Answer answer = answerMapper.answerPostToAnswer(request);
        answer.setQuestion(questionService.findVerifiedQuestion(questionId));
        answerService.createAnswer(answer);
        //memberService. ... 멤버ID 추가 메서드 필요
        System.out.println("answer.getQuestion().getQuestionId : " + answer.getQuestion().getQuestionId());
//        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, createdAnswer.getAnswerId());
//        return ResponseEntity.created(location).build();
        AnswerDto.Response answer2 = answerMapper.answerToAnswerResponse(answer);
        answer2.setQuestionId(questionId);
        System.out.println("answer2.getQuestionId() : " + answer2.getQuestionId());

        return new ResponseEntity<>(answer2,HttpStatus.CREATED);

//        return new ResponseEntity<>(
//                new SingleResponseDto<>(answerMapper.answerToAnswerResponse(answer)), HttpStatus.CREATED
//        );
    }
    //TODO: 본인이 아닐경우의 처리 추가
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerDto.Patch request,
                                      @Positive @PathVariable("answer-id") long answerId,
                                      @Positive @PathVariable("question-id") long questionId)  {
        System.out.println("questionId = "+ questionId);
        request.setAnswerId(answerId);
        System.out.println(request.getAnswerId());
        Answer updatedAnswer = answerService.updateAnswer(answerMapper.answerPatchToAnswer(request));
        updatedAnswer.getQuestion().setQuestionId(questionId);
        System.out.println(updatedAnswer.getContent());
        System.out.println("updated.questionid = "+ updatedAnswer.getQuestion().getQuestionId());

        AnswerDto.Response response = answerMapper.answerToAnswerResponse(updatedAnswer);
        response.setQuestionId(questionId);

        return new ResponseEntity<>(response, HttpStatus.OK);

//        return new ResponseEntity<>(
//                new SingleResponseDto<>(answerMapper.answerToAnswerResponse(updatedAnswer)),HttpStatus.OK);
    }

    //TODO: 본인이 아닐경우의 처리 추가
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@Positive @PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


/*

    @PostMapping
    public ResponseEntity postAnswer() {
        return ResponseEntity;
    }
 */
}
