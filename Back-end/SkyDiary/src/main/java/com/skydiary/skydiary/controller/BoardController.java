package com.skydiary.skydiary.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("board")
public class BoardController {
	
	@GetMapping(value = "home")
	public String home(HttpSession session) {
		return "board/home";
	}
	
}
