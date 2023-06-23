package com.stackoverflow.stackoverflowclone.question.controller;

import com.stackoverflow.stackoverflowclone.dto.MultiResponseDto;
import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.question.mapper.QuestionMapper;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import com.stackoverflow.stackoverflowclone.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/questions")
public class QuestionController {

    public final static String QUESTION_DEFAULT_URL = "/questions";
    public final QuestionService questionService;
    public final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    /** 질문 등록 **/
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post post){

        Question createdQuestion = questionService.createQuestion(questionMapper.QuestionPostDtoToQuestion(post));

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, createdQuestion.getQuestionId());

        QuestionDto.postResponse postResponse = questionMapper.QuestionToQuestionPostResponseDto(createdQuestion);

        return ResponseEntity.created(location).body(postResponse);
    }


    /** 질문 수정 **/
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @RequestBody QuestionDto.Patch patch){

        patch.addQuestionId(questionId);

        questionService.updateQuestion(questionMapper.QuestionPatchDtoToQuestion(patch));

        return ResponseEntity.ok().build();
    }


    /** 개별 질문 조회 **/
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("question-id") long questionId){

        Question findQuestion = questionService.findQuestion(questionId);

        return new ResponseEntity<>(questionMapper.QuestionToQuestionResponseDto(findQuestion),HttpStatus.OK);
    }


    /** 전체 질문 목록 조회 **/
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @RequestParam String sort){

        Page<Question> pageQuestions = questionService.findQuestions(page-1, sort);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(questionMapper.QuestionsToQuestionResponseDtos(questions),pageQuestions),
        HttpStatus.OK);
    }


    /** 질문 검색 **/
    @GetMapping("/search")
    public ResponseEntity SearchQuestion(@Positive @RequestParam int page,
                                         @RequestParam String keyword){

        Page<Question> pageQuestions = questionService.searchQuestion(page-1, keyword);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(questionMapper.QuestionsToQuestionSearchResponseDtos(questions),pageQuestions),
                HttpStatus.OK);
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
