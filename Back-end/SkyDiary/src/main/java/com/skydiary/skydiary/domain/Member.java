package com.skydiary.skydiary.domain;

import java.sql.Date;

public class Member {

	private Long mNo;
	private String id, pw, name, email;
	private Date mCreated;

	public Member() {
		// TODO Auto-generated constructor stub
	}

	public Member(Long mNo, String id, String pw, String name, String email, Date mCreated) {
		super();
		this.mNo = mNo;
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.email = email;
		this.mCreated = mCreated;
	}

	public Long getmNo() {
		return mNo;
	}

	public void setmNo(Long mNo) {
		this.mNo = mNo;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getmCreated() {
		return mCreated;
	}

	public void setmCreated(Date mCreated) {
		this.mCreated = mCreated;
	}

}