package com.example.demo.board.controller;

import com.example.demo.board.domain.LoginDto;
import com.example.demo.board.exception.BaseException;
import com.example.demo.board.exception.WrongIdPasswordException;
import com.example.demo.board.service.AuthenticationService;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/login")
public class AuthenticationController {

    @Resource(name="com.example.demo.board.service.AuthenticationService")
    AuthenticationService authenticationService;

    public void setAuthenticationService(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @GetMapping
    public String loginForn(LoginDto loginDto) {
        return "loginForm";
    }

    @PostMapping
    public String submit(LoginDto dto, Errors errors, HttpServletRequest request) throws BaseException {
        HttpSession session = request.getSession();

        if(errors.hasErrors()) {
            return "loginForm";
        }
        try {
            authenticationService.login(dto);
            session.setAttribute("loginDto" , dto);
            return "material";
            //return "loginSuccess";

        } catch (WrongIdPasswordException e) {
            errors.reject("idPasswordNotMatching");
            return "loginForm";
        }
        //authenticationService.login(dto, session);

    }

    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/main";
    }

//    @RequestMapping(value = "login", method = RequestMethod.POST)
//    @ResponseBody
//    public CommonBean submit(LoginDto dto, Errors errors, HttpSession session) throws BaseException {
//        if(errors.hasErrors()) {
//            return "loginForm";
//        }
//        authenticationService.login(dto, session);
//
//        return dto;
//    }


}
