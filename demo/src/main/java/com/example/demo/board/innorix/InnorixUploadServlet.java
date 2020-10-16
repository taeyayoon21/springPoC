package com.example.demo.board.innorix;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.board.common.Innorix;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;


import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;


/*@Controller
@RequestMapping("/InnorixUpload")*/
@WebServlet(name="InnorixUploadServlet", urlPatterns="/InnorixUpload")
public class InnorixUploadServlet extends HttpServlet {
    
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
    
    @PostMapping
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("########################################InnorixUploadServelt.java");
  
         try {
             
            new Innorix().upload(request, response);
            
        } catch (Exception e) {
            
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        
    }


}
