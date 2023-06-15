package com.stackoverflow.stackoverflowclone.question.controller;

import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.question.mapper.QuestionMapper;
import com.stackoverflow.stackoverflowclone.question.repository.QuestionRepository;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import com.stackoverflow.stackoverflowclone.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@Slf4j
@RequestMapping("/questions")
public class QuestionController {

    public final static String QUESTION_DEFAULT_URL = "/questions";
    public final QuestionRepository questionRepository;
    public final QuestionService questionService;
    public final QuestionMapper questionMapper;

    public QuestionController(QuestionRepository questionRepository, QuestionService questionService, QuestionMapper questionMapper) {
        this.questionRepository = questionRepository;
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }


    /** 질문 등록 **/
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post post){

        Question createdQuestion = questionService.createQuestion(questionMapper.QuestionPostDtoToQuestion(post));

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, createdQuestion.getQuestionId());

        return ResponseEntity.created(location).build();
    }

    /** 질문 수정 **/
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @RequestBody QuestionDto.Patch patch){

        // TODO : token으로 어떤 회원인지 알아야함

        patch.addQuestionId(questionId);

        Question question = questionService.updateQuestion(questionMapper.QuestionPatchDtoToQuestion(patch));

        return ResponseEntity.ok().build();
    }


    /** 질문 삭제
     *  TODO : JWT에 따라 어떤 회원인지도 파라미터로 questionService에 보내야할 수도 있음
     * **/
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId){

        // TODO : token으로 어떤 회원인지 알아야함
        questionService.deleteQuestion(questionId);

        return ResponseEntity.noContent().build();
    }


}
