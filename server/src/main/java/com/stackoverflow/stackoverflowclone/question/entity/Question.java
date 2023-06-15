package com.stackoverflow.stackoverflowclone.question.entity;


import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.audit.Auditable;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter @Setter
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title; //제목

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content; // 본문

    private int views; // 조회수

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
    
    @OneToMany(mappedBy = "question")
    private List<Answer> answers;


    /**
     * Member와 연관관계 설정
     */
    public void setMember(Member member){
        this.member = member;

        if(!this.member.getQuestions().contains(this)){
            this.member.getQuestions().add(this);
        }
    }

    public void addMember(Member member){
        this.member = member;
    }

    /**
     * 조회수 1 증가 메서드
     */
    public void addView(int view){
        this.views = view + 1;
    }

    public Question(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
