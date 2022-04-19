package com.skydiary.skydiary.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.skydiary.skydiary.service.MemberService;
import com.skydiary.skydiary.service.MemberServiceImpl;

@Configuration
public class CommonConfig {
	
	@Bean
	public MemberService memberService(){
		return new MemberServiceImpl();
	}
	
}
