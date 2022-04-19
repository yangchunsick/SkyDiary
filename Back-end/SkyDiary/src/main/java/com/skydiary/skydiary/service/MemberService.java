package com.skydiary.skydiary.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skydiary.skydiary.domain.Member;

public interface MemberService {
	/* 아이디 중복 확인 */
	public Map<String, Object> idCheck(String id);
	/* 이메일 중복 확인 */
	public Map<String, Object> emailCheck(String email);
	/*이메일 인증 */
	public Map<String, Object> sendAuthCode(String email);
	/* 회원가입 */
	public void join(Member member);
	/* 로그인 */
	public void login(HttpServletRequest request, HttpServletResponse response);
}
