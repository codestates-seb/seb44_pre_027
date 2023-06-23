package com.stackoverflow.stackoverflowclone.question.service;

import com.stackoverflow.stackoverflowclone.exception.BusinessLogicException;
import com.stackoverflow.stackoverflowclone.exception.ExceptionCode;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.member.service.MemberService;
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

    private final MemberService memberService;



    /** 질문 등록 메서드 **/
    public Question createQuestion(Question question){

        // 작성한 회원이 존재하는 회원인지 확인
        memberService.findVerifiedMember(question.getMember().getMemberId());

        return questionRepository.save(question);
    }


    /** 질문 수정 메서드
     * - 모든 회원이 글 수정 가능 (OK)
     * **/
    public Question updateQuestion(Question question){

        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));
        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));

        return questionRepository.save(findQuestion);
    }

    /** 질문 조회 메서드 (OK)
     * - 상세 질문을 조회하면 조회수 1 증가
     * - @transactional 때문에 save 안해도 조회수 반영
     * **/
    public Question findQuestion(long questionId){

        Question findQuestion = findVerifiedQuestion(questionId);

        // 조회수 +1 증가
        findQuestion.addView(findQuestion.getViews());

        return findQuestion;
    }

    /**
     * 전체 질문 목록 조회 메서드
     * - 1페이지 당 질문 5개 (size : 5로 고정값)
     * - 정렬 sort (최신 순, 조회수 순, 투표순 OK)
     * - request body
     */
    public Page<Question> findQuestions(int page, String sort){

        // 받아온 정렬 기준이 최신 순이면
        if(sort.equals("new")){
            return questionRepository.findAll(PageRequest.of(page,5, Sort.by("questionId").descending()));
        }
        // 받아온 정렬 기준이 조회수 순이면
        else if(sort.equals("views")){
            return questionRepository.findAll(PageRequest.of(page,5,Sort.by("views").descending()));
        }
        // 받아온 정렬 기준이 투표 순이면
        else if(sort.equals("votes")){
            return questionRepository.findAll(PageRequest.of(page,5, Sort.by("voteScore").descending()));
        }
        // 정렬 3개 외 나머지는 에러 발생
        else {
            // TODO : 예외 처리
            throw new RuntimeException();
        }
    }

    /**
     * 질문 검색 메서드 (OK)
     * - 질문 제목이나 본문에 해당 단어가 포함되면 검색
     * - 최신 순으로 나열
     */
    public Page<Question> searchQuestion(int page, String keyword){

        return questionRepository.searchByKeyword(keyword, PageRequest.of(page,5,Sort.by("questionId").descending()));
    }



    /**
     * 질문 삭제 메서드
     *  - 작성자는 자신의 질문을 삭제할 수 있다
     *  - 답변이 달린 경우에는 삭제가 불가능하다
     * **/
    public void deleteQuestion(long questionId){

        // TODO : token으로 로그인 한 회원을 알아야함
        // TODO : 로그인 회원의 id를 얻어서 question을 등록한 회원의 id와 비교

        // 답변이 달린 경우에는 삭제가 불가능하다
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
