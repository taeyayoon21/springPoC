package com.example.demo.board.controller;

import com.example.demo.board.domain.BoardVO;
import com.example.demo.board.domain.FileVO;
import com.example.demo.board.service.BoardService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

@Controller
public class BoardController {

    @Value("${file.upload.path}")
    String uploadPath;

    @Resource(name="com.example.demo.board.service.BoardService")
    BoardService boardService;

    @RequestMapping("/list")
    private String boardList(Model model) throws Exception {

        model.addAttribute("list", boardService.boardListService());

        return "list";
    }

    @RequestMapping("/detail/{idBoard}")
    private String boardDetail(@PathVariable int idBoard, Model model) throws Exception {

        model.addAttribute("detail", boardService.boardDetailService(idBoard));
        model.addAttribute("files", boardService.fileDetailService(idBoard));

        return "detail";
    }
    @RequestMapping("/insertView")
    private String boardInsertForm() throws Exception {
        return "insert";
    }
    @RequestMapping("/insert")
    private String boardInsert(HttpServletRequest request, @RequestPart MultipartFile files) throws Exception {

        BoardVO boardVO = new BoardVO();
        //FileVO file = new FileVO();
        boardVO.setSubject(request.getParameter("subject"));
        boardVO.setContent(request.getParameter("content"));
        boardVO.setWriter(request.getParameter("writer"));

        //String fileUrl = "/Users/leekyunghee/works/springboot-mvc-jsp/src/main/webapp/WEB-INF/uploadFiles/";
        
        
		/*
		 * String fileName = files.getOriginalFilename(); String sourceFileNameExtension
		 * = FilenameUtils.getExtension(fileName); File destinationFile; String
		 * destinationFileName;
		 */

		/*
		 * do { destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." +
		 * sourceFileNameExtension; destinationFile = new File(uploadPath +
		 * destinationFileName); } while (destinationFile.exists());
		 * 
		 * destinationFile.getParentFile().mkdirs(); files.transferTo(destinationFile);
		 */

        boardService.boardInsertService(boardVO);

		/*
		 * file.setBoardNo(boardVO.getIdBoard()); file.setFileName(destinationFileName);
		 * file.setFileOriginalName(fileName); file.setFileUrl(uploadPath);
		 * 
		 * boardService.fileInsertService(file); //file insert
		 */
        return "redirect:list";
    }
    @RequestMapping("/update/{idBoard}")
    private String boardUpdateForm(@PathVariable int idBoard, Model model) throws Exception {

        model.addAttribute("update", boardService.boardDetailService(idBoard));

        return "update";
    }

    @RequestMapping("/update")
    private String boardUpdate(HttpServletRequest request) throws Exception {

        BoardVO boardVO = new BoardVO();
        boardVO.setSubject(request.getParameter("subject"));
        boardVO.setContent(request.getParameter("content"));
        boardVO.setWriter(request.getParameter("writer"));
        boardVO.setIdBoard(request.getParameter("idBoard"));

        boardService.boardUpdateService(boardVO);

        return "redirect:/detail/"+request.getParameter("idBoard");
    }

    @RequestMapping("/delete/{idBoard}")
    private String delete(@PathVariable int idBoard) throws Exception {

        boardService.boardDeleteService(idBoard);

        return "redirect:/list";
    }

    @RequestMapping("/fileDownload/{boardNo}")
    private void fileDownload(@PathVariable int boardNo, HttpServletRequest request, HttpServletResponse response) throws Exception, FileNotFoundException {

        request.setCharacterEncoding("UTF-8");
        FileVO fileVO = boardService.fileDetailService(boardNo);
        try {
            String fileUrl = fileVO.getFileUrl();
            fileUrl += "/";
            String savePath = fileUrl;
            String fileName = fileVO.getFileName();

            String originalFileName = fileVO.getFileOriginalName();
            InputStream in = null;
            OutputStream os = null;
            File file = null;
            boolean skip = false;
            String client = "";
            try {
                file =  new File(savePath, fileName);
                in = new FileInputStream(file);
            } catch (FileNotFoundException fe)  {
                skip = true;
            }
            client = request.getHeader("User-Agent");

            response.reset();
            response.setContentType("application/octet-stream");
            response.setHeader("Content-Description",  "JSP Generated Data");

            if(!skip) {
                if(client.indexOf("MSIE") != -1) {
                    response.setHeader("Content-Disposition", "attachment; filename=\""
                    + java.net.URLEncoder.encode(originalFileName, "UTF-8").replaceAll("\\+", "\\ ") + "\"");
                } else if (client.indexOf("Trident") != -1) {
                    response.setHeader("Content-Disposition", "attachment; filename=\""
                            + java.net.URLEncoder.encode(originalFileName, "UTF-8").replaceAll("\\+", "\\ ") + "\"");
                } else {
                    response.setHeader("Content-Disposition", "attachment; filename=\"" + new String(originalFileName.getBytes("UTF-8"), "ISO8859_1") + "\"");
                    response.setHeader("Content-Type", "application/octet-stream; charset=utf-8");
                }
                response.setHeader("Content-Length", "" + file.length());
                os = response.getOutputStream();
                byte b[] = new byte[(int)  file.length()];
                int length =  0;
                while ((length = in.read(b)) >  0)  {
                    os.write(b,0, length);
                }
            }  else {
                response.setContentType("text/html;charset=UTF-8");
                System.out.println("<script langguage='javascript'>alert('파일을 찾을 수 없습니다.');history.back();</script>");
            }
            in.close();
            os.close();
        } catch (Exception e) {
            System.out.println("ERROR: " + e.getMessage());
        }
    }
}
