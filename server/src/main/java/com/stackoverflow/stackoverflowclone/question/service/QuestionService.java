package com.stackoverflow.stackoverflowclone.question.service;

import com.stackoverflow.stackoverflowclone.exception.BusinessLogicException;
import com.stackoverflow.stackoverflowclone.exception.ExceptionCode;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.question.repository.QuestionRepository;
import com.stackoverflow.stackoverflowclone.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;

    // private final MemberService memberService;

    private final CustomBeanUtils<Question> beanUtils;



    /** 질문 등록 메서드 **/
    public Question createQuestion(Question question){

        // TODO : 작성한 회원이 존재하는 회원인지 확인하는 메서드 (memberservice)에서

        return questionRepository.save(question);
    }


    /** 질문 수정 메서드 **/
    public Question updateQuestion(Question question){

        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        // TODO : Q? 작성한 회원만 수정할 수 있는지 아무나 수정 할 수 있는지
        // TODO : 로그인된 회원의 id를 얻어서 question을 등록한 회원의 id와 비교
        Question updatedQuestion = beanUtils.copyNonNullProperties(question, findQuestion);

        return questionRepository.save(updatedQuestion);
    }


    /**
     * 전체 질문 목록 조회 메서드
     * - 1페이지 당 질문 5개 (size : 5로 고정값)
     * - 정렬 sort (최신,.
     */
    /*
    public Page<Question> findQuestions(int page, String sort){

        // TODO : 정렬 기준에 따라 바꾸기
        return questionRepository.findAll(PageRequest.of(page,5, Sort.by("question_id").descending()));
    }
    
     */

    /**
     * 질문 삭제 메서드
     *  - 작성자는 자신의 질문을 삭제할 수 있다
     *  - 답변이 달린 경우에는 삭제가 불가능하다
     * **/
    public void deleteQuestion(long questionId){

        // TODO : token으로 로그인 한 회원을 알아야함
        // TODO : 로그인 회원의 id를 얻어서 question을 등록한 회원의 id와 비교

        // 답변이 달린 경우에는 삭제가 불가능하다
        // TODO : 삭제는 안되는데 ... 에러가 안난다..
        int deleteNum = questionRepository.deleteByAnswersIsEmptyAndQuestionId(questionId);

        // deleteNum이 1이면 잘 삭제된 경우, 0이면 답변이 달린 경우여서 삭제 볼가능
        // TODO : throw 날려서 catch해서 repsonse에 뜰수 있도록 해야함
        if(deleteNum != 1){
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXIST_ANSWER);
        }
    }


    /** 질문이 등록된 질문인지 확인 메서드 **/
    public Question findVerifiedQuestion(long questionId){

        Optional<Question> findQuestion = questionRepository.findById(questionId);

        Question question = findQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        
        return question;
    }





}
