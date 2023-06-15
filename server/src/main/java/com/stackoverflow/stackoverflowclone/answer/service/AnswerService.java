package com.stackoverflow.stackoverflowclone.answer.service;

import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.answer.repository.AnswerRepository;
import org.springframework.stereotype.Service;

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
        Answer foundAnswer = findAnswerByAnswerId(answer.getAnswerId());

        return updatedAnswer;
    }

    public Answer findAnswerByAnswerId(long answerId){
        return foundAnswer
    }

}
