package com.example.demo.board.service;

import com.example.demo.board.domain.AccountVO;
import com.example.demo.board.domain.CommonBean.ReturnType;
import com.example.demo.board.domain.LoginDto;
import com.example.demo.board.exception.BaseException;
import com.example.demo.board.exception.WrongIdPasswordException;

import com.example.demo.board.mapper.AccountMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

@Service("com.example.demo.board.service.AuthenticationService")
public class AuthenticationService {


    private static final Logger logger = LoggerFactory.getLogger(AuthenticationService.class);
    public static final String SESSION_OBJ = "userLoginObject";

    @Resource(name="com.example.demo.board.mapper.AccountMapper")
    AccountMapper accountMapper;

    public void login(LoginDto dto) {
        AccountVO accountVO = new AccountVO();
        //TODO 패스워드 검증 필요
        accountVO = accountMapper.selectAccountByUsername(dto.getUsername());
        if (accountVO == null) {
            throw new WrongIdPasswordException();
        }
        if (!accountVO.matchPassword(dto.getPassword())) {
            throw new WrongIdPasswordException();
        }
        dto.setSuccessLogin("Y");

        dto.setReturnType(ReturnType.success);
        dto.setErrorCode("");

        //@TODO 로그인 성공일 경우, 로그인 완료 후 세션 관리
//        session.setAttribute("Username", dto.getUsername());
//        session.setAttribute("Token", dto.getToken());
//        SessionObject.addSession(dto.getUsername(), session);
//        TokenObject.setToken(dto.getUsername(), dto.getToken());
//
//        SessionObject.addSession(dto.getUsername(), session);
//        TokenObject.setToken(dto.getUsername(), dto.getToken());
//
//        session.setAttribute(SESSION_OBJ, dto);

        //logger.debug("SessionObject getSession ["+  SessionObject.getSession(dto.getUsername()) + "]");
        //@TODO  HttpSessionListener
    }

    public void logout(HttpSession session) throws BaseException {
        try {
            String username = (String) session.getAttribute("Username");
			/*
			 * if (username != null && !username.isEmpty() &&
			 * username.equals(SessionObject.getController())) {
			 * SessionObject.setController(""); }
			 */

            session.removeAttribute("Username");
            session.invalidate();
            // TODO 로그아웃 감사로그

        } catch (Exception e) {
            logger.error("(errorCode)" + e.getLocalizedMessage());
            //throw new BaseException(messageSource, "logout.fail", null, "", e);
        }
    }
}
