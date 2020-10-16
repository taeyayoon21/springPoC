package com.example.demo.board.controller;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class testController {
	//@RequestMapping("/InnorixUpload")
	public void test(HttpServletRequest request, HttpServletResponse response) {
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@request : "+request);
	}
	
	
	@RequestMapping(path = "/InnorixUpload", method = RequestMethod.POST,	        consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public @ResponseBody ResponseEntity<String> add(HttpServletRequest request) throws Exception {
	    System.out.println("request :: "+ request);
	    System.out.println("fsldf : "+request.getParameter("MS"));
	    System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ requestaaa httpServletRequestToString:["+httpServletRequestToString(request)+"]");
	    
	    return new ResponseEntity<>("Created", HttpStatus.OK);
	}
	
	
	
	String httpServletRequestToString(HttpServletRequest request) throws Exception {

	    ServletInputStream mServletInputStream = request.getInputStream();
	    byte[] httpInData = new byte[request.getContentLength()];
	    int retVal = -1;
	    StringBuilder stringBuilder = new StringBuilder();

	    while ((retVal = mServletInputStream.read(httpInData)) != -1) {
	        for (int i = 0; i < retVal; i++) {
	            stringBuilder.append(Character.toString((char) httpInData[i]));
	        }
	    }

	    return stringBuilder.toString();
	}
}