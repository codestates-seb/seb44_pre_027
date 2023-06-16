package com.stackoverflow.stackoverflowclone.answer.controller;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.answer.mapper.AnswerMapper;
import com.stackoverflow.stackoverflowclone.answer.service.AnswerService;
import com.stackoverflow.stackoverflowclone.dto.MultiResponseDto;
import com.stackoverflow.stackoverflowclone.dto.SingleResponseDto;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import com.stackoverflow.stackoverflowclone.utils.UriCreator;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

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
//        answer.setQuestion(questionService.findVerifiedQuestion(questionId));
        System.out.println(answer.getQuestion().getQuestionId());
        Answer createdAnswer = answerService.createAnswer(answer);
//        createdAnswer.getQuestion().setQuestionId(questionId);
        AnswerDto.Response response = answerMapper.answerToAnswerResponse(createdAnswer);
        return new ResponseEntity<>(response, HttpStatus.CREATED);

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
    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size,
                                     @PathVariable("question-id") long questionId) {
        //question-id 설정작업 필요
        Page<Answer> pageOfAnswers = answerService.getAnswersInTheQuestion(page - 1, size, questionId);
        for (Answer answer : pageOfAnswers.getContent()) {
            System.out.println(answer.getContent());
            System.out.println(answer.getQuestion().getQuestionId());
            System.out.println("---------");
        }
        List<Answer> answers = pageOfAnswers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(answerMapper.answersToAnswerResponses(answers), pageOfAnswers),
                HttpStatus.OK);
    }
*/
}
