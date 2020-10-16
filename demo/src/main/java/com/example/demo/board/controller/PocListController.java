package com.example.demo.board.controller;

import java.util.List;
import com.example.demo.board.domain.BoardVO;
import com.example.demo.board.domain.FileVO;
import com.example.demo.board.domain.PocListVO;
import com.example.demo.board.service.PocListService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;


import java.io.*;

@Controller
//@RequestMapping("/poclist")	--? 오류남
public class PocListController {


    @Resource(name="com.example.demo.board.service.PocListService")
    PocListService pocListService;

    //@ResponseBody
    //@RequestMapping("/poclists")
	/*
	 * @RequestMapping(value="/poclists" ,method = RequestMethod.POST)
	 * private @ResponseBody List<PocListVO> pocList(Model model) throws Exception {
	 * 
	 * System.out.println("######################Controller list : "+pocListService.
	 * pocRowListService());
	 * 
	 * //model.addAttribute("poclist", pocListService.pocRowListService());
	 * List<PocListVO> PocListVO=pocListService.pocRowListService();
	 * //List<VersionVO> versionVO=versionService.versionList(pushTarget);
	 * 
	 * 
	 * System.out.println("#####################Controller model : "+model);
	 * System.out.println("#####################Controller PocListVO : "+PocListVO);
	 * return PocListVO; }
	 */
    
    @RequestMapping(value="/poclists" ,method = RequestMethod.POST)
    @ResponseBody
    private  String pocList(Model model) throws Exception {

    	List<PocListVO> PocListVO=pocListService.pocRowListService();
        model.addAttribute("poclist", pocListService.pocRowListService());
        
        System.out.println("###pocListService.pocRowListService() : "+pocListService.pocRowListService());
        System.out.println("###PocListVO : "+PocListVO);
        System.out.println("###model : "+model);
        
        ObjectMapper mapper = new ObjectMapper();
        
        String pocListString = mapper.writeValueAsString(PocListVO);
        System.out.println("###pocListString2 : "+pocListString);
        return pocListString;
    		
   
    }
    
    
	/*
	 * private String pocList(Model model) throws Exception {
	 * 
	 * System.out.println("######################Controller list : "+pocListService.
	 * pocRowListService());
	 * 
	 * model.addAttribute("poclist", pocListService.pocRowListService());
	 * System.out.println("#####################Controller model : "+model); return
	 * "poclist"; }
	 */

}
