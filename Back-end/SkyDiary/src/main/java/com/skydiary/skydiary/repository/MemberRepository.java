package com.skydiary.skydiary.repository;

import com.skydiary.skydiary.domain.Member;

public interface MemberRepository {
	/* 아이디 중복 확인 */
	public Member selectMemberById(String id);
	/* 이메일 중복 확인 */
	public Member selecMemberByEmail(String email);
	/* 회원가입 */
	public int joinMember(Member member);
	/* 로그인 */
	public Member login(Member member);
}
