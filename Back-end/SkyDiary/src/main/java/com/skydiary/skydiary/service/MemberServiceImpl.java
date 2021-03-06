package com.skydiary.skydiary.service;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;

import com.skydiary.skydiary.domain.Member;
import com.skydiary.skydiary.repository.MemberRepository;
import com.skydiary.skydiary.util.SecurityUtils;

public class MemberServiceImpl implements MemberService {
	
	private SqlSessionTemplate sqlSession;
	private JavaMailSender javaMailSender;
	
	@Autowired
	public void setBean(SqlSessionTemplate sqlSession, JavaMailSender javaMailSender) {
		this.sqlSession = sqlSession;
		this.javaMailSender = javaMailSender;
	}
	
	/* 아이디 중복 확인 */
	@Override
	public Map<String, Object> idCheck(String id) {
		MemberRepository repository = sqlSession.getMapper(MemberRepository.class);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", repository.selectMemberById(id));
		/* map에 result라는 이름으로 담았음 */
		return map;
	}
	
	/* 이메일 중복 확인 */
	@Override
	public Map<String, Object> emailCheck(String email) {
		MemberRepository repository = sqlSession.getMapper(MemberRepository.class);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", repository.selecMemberByEmail(email));
		return map;
	}

	/* 이메일 인증 */
	@Override
	public Map<String, Object> sendAuthCode(String email) {

		/* 6자리 인증코드 생성 */
		String authCode = SecurityUtils.authCode(6);
		System.out.println("(1)생성된 인증 코드" + authCode);

		/* 이메일 전송 */
		try {
			MimeMessage message = javaMailSender.createMimeMessage();
			message.setHeader("Content-Type", "text/plain; charset=UTF-8");
			message.setFrom(new InternetAddress("mrvin79@gmail.com", "SkyDiary"));
			message.setRecipient(Message.RecipientType.TO, new InternetAddress(email));
			message.setSubject("SkyDiary 회원가입 인증 번호");
			message.setText("인증번호는 " + authCode + "입니다.");
			javaMailSender.send(message);
		} catch (Exception e) {
			e.printStackTrace();
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("authCode", authCode);
		System.out.println("(2)반환되는 인증 코드/map" + authCode);
		return map;
	}

	/* 회원가입 */
	@Override
	public void join(Member member) {
		MemberRepository repository = sqlSession.getMapper(MemberRepository.class);
		repository.joinMember(member);
	}

	/* 로그인 */
	@Override
	public void login(HttpServletRequest request, HttpServletResponse response) {
		/* Request 받은 아이디를 가지고 */
		Member member = new Member();
		member.setId(request.getParameter("id"));
		member.setPw(request.getParameter("pw"));
		/* DB에 일치한 정보가 있는지 조회 */
		MemberRepository repository = sqlSession.getMapper(MemberRepository.class);
		Member loginUser = repository.login(member);
		/* 일치한 정보가 있다면 Session에 저장 */
		if (loginUser != null) {
			request.getSession().setAttribute("loginUser", loginUser);
		}
			try {
				response.setContentType("text/html; charset=UTF-8");
				PrintWriter out = response.getWriter();
				if(loginUser != null) {
					out.println("<script>");
 					out.println("location.href='/skydiary/board/home';");
 					out.println("</script>");
					System.out.println("로그인 성공");
				}else {
					out.println("<script>");
					out.println("alert('일치하는 회원 정보가 없습니다.');");
					out.println("history.back();");
 					out.println("</script>");
				}
				out.close();
				
			}catch (Exception e) {
				e.printStackTrace();
			}
	}

}