package com.stackoverflow.stackoverflowclone.vote.entity;

import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter @Setter
@Table(name = "votes")
public class Vote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteId;

    @Enumerated(EnumType.STRING)
    private voteStatus status; // 추천, 비추천

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;


    public enum voteStatus {
        GOOD("추천"),
        BAD("비추천");

        @Getter
        private String status;

        voteStatus(String status) {
            this.status = status;
        }
    }
}
