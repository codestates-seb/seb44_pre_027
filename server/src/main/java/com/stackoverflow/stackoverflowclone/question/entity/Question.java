package com.stackoverflow.stackoverflowclone.question.entity;


import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.audit.Auditable;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.vote.entity.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
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

    private int voteScore; // 투표 수

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
    
    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question")
    private List<Vote> votes = new ArrayList<>();


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


    public Question(String title, String content, int views, int voteScore) {
        this.title = title;
        this.content = content;
        this.views = views;
        this.voteScore = voteScore;
    }

    /**
     * vote를 처음 등록하면 연관관계 매핑 후 calculateVoteScore
     */
    public void addVoteScore(Vote vote) {
        this.votes.add(vote);

        vote.setQuestion(this);
        calculateVoteScore();
    }

    /** question의 합산 voteScore 계산 **/
    public void calculateVoteScore() {
        this.voteScore = votes.stream()
                .mapToInt(vote -> {
                    if(vote.getStatus() == Vote.voteStatus.GOOD) {
                        return 1;
                    } else if (vote.getStatus() == Vote.voteStatus.BAD) {
                        return -1;
                    } else {
                        return 0;
                    }
                }).sum();
    }
}
