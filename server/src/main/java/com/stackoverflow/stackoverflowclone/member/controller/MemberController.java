package com.stackoverflow.stackoverflowclone.member.controller;

import com.stackoverflow.stackoverflowclone.member.dto.MemberDTO;
import com.stackoverflow.stackoverflowclone.member.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Scanner;

@RestController
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;

    // MemberService 생성자 주입
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    public void registerMember() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("회원 정보를 입력하세요 :");
        System.out.print("닉네임 :");
        String nickname = scanner.nextLine();

        System.out.print("이메일 :");
        String email = scanner.nextLine();

        System.out.print("비밀번호 :");
        String password = scanner.nextLine();

        System.out.print("지역 :");
        String location = scanner.nextLine();

        System.out.print("소개 제목 :");
        String title = scanner.nextLine();

        System.out.print("소개 내용 :");
        String content = scanner.nextLine();

        MemberDTO member = new MemberDTO(nickname, email, password, location, title, content);
        memberService.registerMember(member);
    }

  /*  public static void main(String[] args) {
        MemberController controller = new MemberController();
        controller.registerMember();
    }
    */
}

