package com.stackoverflow.stackoverflowclone.member.entity;

import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.audit.Auditable;
import com.stackoverflow.stackoverflowclone.comment.entity.Comment;
import com.stackoverflow.stackoverflowclone.question.entity.Question;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Member extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;

    private String nickname;

    private String email;

    private String password;

    private String location;

    private String bioTitle;

    private String bioContent;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Comment> comments = new ArrayList<>();

    /*
    @OneToMany(mappedBy = "member")
    private List<Vote> votes = new ArrayList<>();
     */

    public Member(String nickname, String email, String password, String location, String bioTitle, String bioContent) {
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.location = location;
        this.bioTitle = bioTitle;
        this.bioContent = bioContent;
    }
}
