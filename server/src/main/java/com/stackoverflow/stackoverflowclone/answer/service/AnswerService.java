package com.stackoverflow.stackoverflowclone.answer.service;

import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.answer.repository.AnswerRepository;
import com.stackoverflow.stackoverflowclone.audit.Auditable;
import com.stackoverflow.stackoverflowclone.exception.BusinessLogicException;
import com.stackoverflow.stackoverflowclone.exception.ExceptionCode;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.question.repository.QuestionRepository;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;

    public AnswerService(AnswerRepository answerRepository, QuestionRepository questionRepository) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
    }

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        //TODO: 본인 검증 로직 추가... member 서비스 어느정도 완성되어야 할듯
        Answer foundAnswer = findAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContent()).ifPresent(content -> foundAnswer.setContent(content));
        Optional.ofNullable(answer.getModifiedAt()).ifPresent(modifiedAt -> foundAnswer.setModifiedAt(modifiedAt));
        return answerRepository.save(foundAnswer);
    }

    public Answer findAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        return optionalAnswer.orElseThrow( () -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }
    /* with paging
    public Answer findAnswers(long questionId, int page, int size){
        return answerRepository.findAll(questionId, page, size);
    }
     */

    public void deleteAnswer(long answerId) {
        //TODO: 본인 검증 로직 추가... member 서비스 어느정도 완성되어야 할듯
        answerRepository.deleteById(answerId);
    }

//    public boolean isAuthorSame(Answer answer){
//
//    }

    public List<Answer> findAnswers(long questionId) {
        return answerRepository.findAll(questionId);
    }

}
