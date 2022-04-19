package com.skydiary.skydiary.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.resource.HttpResource;

import com.skydiary.skydiary.domain.Member;
import com.skydiary.skydiary.service.MemberService;

@Controller
@RequestMapping("member/*")
public class MemberController {

	@Autowired
	private MemberService service;

	/* 회원가입 페이지 */
	@GetMapping(value = "joinForm")
	public String joinform() {
		return "member/join";
	}
	
	/* 아이디 중복 체크 */
	@PostMapping(value = "idCheck", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public Map<String, Object> idCheck(@RequestParam("id") String id){
		return service.idCheck(id);
	}
	
	/* 이메일 중복 체크 */
	@PostMapping(value = "emailCheck", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public Map<String, Object> emailCheck(@RequestParam("email") String email){
		return service.emailCheck(email);
	}
	
	/* 인증메일 */
	@PostMapping(value = "sendAuthCode", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public Map<String, Object> sendAuthCode(@RequestParam("email") String email){
		return service.sendAuthCode(email);
	}
	
	/* 회원가입 */
	@PostMapping(value = "join")
	public String join(Member member) {
		service.join(member);
		return "redirect:/";
	}

	/* 로그인 */
	@PostMapping(value = "login")
	public void login(HttpServletRequest request, HttpServletResponse response) {
		service.login(request, response);
	}

}
