package com.example.demo.board.controller;

import org.apache.commons.io.FileUtils;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.board.common.Innorix;

import javax.servlet.ServletInputStream;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;

import org.apache.commons.io.FilenameUtils;
import org.apache.maven.model.Model;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;
import org.springframework.web.*;


@RestController
//@RequestMapping("/InnorixUpload")
//@WebServlet(name="InnorixUploadServlet", urlPatterns="/InnorixUpload")
public class InnorixUploadController extends HttpServlet {
    
	/*
	 * <servlet> <servlet-name>InnorixUploadServlet</servlet-name>
	 * <servlet-class>com.example.demo.innorix.InnorixUploadServlet</servlet-class>
	 * </servlet>
	 * 
	 * <servlet> <servlet-name>InnorixDownloadServlet</servlet-name>
	 * <servlet-class>com.example.demo.innorix.InnorixDownloadServlet</servlet-
	 * class> </servlet>
	 * 
	 * 
	 * 
	 * 
	 * <servlet-mapping> <servlet-name>InnorixUploadServlet</servlet-name>
	 * <url-pattern>/InnorixUpload</url-pattern> </servlet-mapping>
	 */

	   
    private static final long serialVersionUID = 1L;
    
    //@RequestMapping(value = "/InnorixUpload", method = RequestMethod.POST)
    //@PostMapping
    @RequestMapping("/InnorixUpload")
   // public void doPost(StandardMultipartHttpServletRequest request, HttpServletRequest request2, MultipartHttpServletRequest request3, @RequestParam(value = "_action", required = false) MultipartFile pocUpload, HttpServletResponse response) throws IOException {
    public void doPost(HttpServletRequest request2, HttpServletResponse response) throws IOException {
    
    	//public String upload(@RequestParam("file") MultipartFile multipartFile) {
    	System.out.println("########################################InnorixUploadController.java");
    	 //HttpServletResponse response=null;
    	String URI = request2.getRequestURI();
        System.out.println("@@@@@@@@@@@@@@@URI : "+URI);
        
        try {
			//System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ request httpServletRequestToString:["+httpServletRequestToString(request)+"]");
			System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ request2 httpServletRequestToString:["+httpServletRequestToString(request2)+"]");
			//System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ request3 httpServletRequestToString:["+httpServletRequestToString(request3)+"]");
			//System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  pocUpload : "+pocUpload);
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
         try {
             
            new Innorix().upload(request2, response);
            
        } catch (Exception e) {
            
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
         
         
         
        
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
