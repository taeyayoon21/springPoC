package com.example.demo.innorix;


import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.board.common.Innorix;

public class InnorixDownloadServlet extends HttpServlet {
    
    

    private static final long serialVersionUID = 1L;

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        
  
         try {
             
            //new Innorix().download(request, response);
            
        } catch (Exception e) {
            
            String msg = "File Download Error";                
                
            response.sendRedirect("/wpcs/common/wpcs_error.jsp?msg="+URLEncoder.encode(msg, "UTF-8").replace("+", "%20"));                
            
            
        }        
        
        
    }


}
