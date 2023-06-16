package com.stackoverflow.stackoverflowclone.answer.service;

import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.answer.repository.AnswerRepository;
import com.stackoverflow.stackoverflowclone.audit.Auditable;
import com.stackoverflow.stackoverflowclone.exception.BusinessLogicException;
import com.stackoverflow.stackoverflowclone.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
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

    public void deleteAnswer(long answerId) {
        //TODO: 본인 검증 로직 추가... member 서비스 어느정도 완성되어야 할듯
        answerRepository.deleteById(answerId);
    }
/*
    public Page<Answer> findAnswers(int page, int size, long questionId) {
        return answerRepository.findAllAnswersInTheQuestion(PageRequest.of(page, size), questionId);
    }
*/
}
