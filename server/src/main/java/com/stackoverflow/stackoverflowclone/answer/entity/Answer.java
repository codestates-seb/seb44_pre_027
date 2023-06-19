package com.stackoverflow.stackoverflowclone.answer.entity;

import com.stackoverflow.stackoverflowclone.audit.Auditable;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.aspectj.weaver.patterns.TypePatternQuestions;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(length = 5000, nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @Override
    public String toString() {
        return "Answer{" +
                "answerId=" + answerId +
                ", content='" + content + '\'' +
                ", member=" + member +
                ", question=" + question +
                '}';
    }

    public void addQuestion(Question question){
        this.question = question;
        if(this.question.getAnswers().contains(this)){
            this.question.getAnswers().add(this);
        }
    }
/*
    public void addMember(Member member) {
        this.member = member;
        if(this.member.getAnswers().contains(this)){
            this.member.getAnswers().add(this);
        }
    }
 */
}
