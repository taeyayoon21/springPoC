package com.example.demo.board.domain;

/**
 * @author 
 * @description 로그인 성공 후 인증 상태 정보를 세션에 보관하기 위해 사용
 */
public class LoginDto extends CommonBean {

	private String username;  // 사용자 아이디
	private String password;
	private String successLogin;
	private String token;
	private String sessionId;

	private String email;
	private boolean rememberEmail;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getSuccessLogin() {
		return successLogin;
	}

	public void setSuccessLogin(String successLogin) {
		this.successLogin = successLogin;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isRememberEmail() {
		return rememberEmail;
	}

	public void setRememberEmail(boolean rememberEmail) {
		this.rememberEmail = rememberEmail;
	}

}
