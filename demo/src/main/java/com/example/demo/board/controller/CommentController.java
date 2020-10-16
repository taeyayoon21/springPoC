package com.example.demo.board.controller;

import com.example.demo.board.domain.CommentVO;
import com.example.demo.board.service.CommentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/comment")
public class CommentController {

    @Resource(name = "com.example.demo.board.service.CommentService")
    CommentService commentService;

    @RequestMapping("/list")
    @ResponseBody
    private List<CommentVO> commentList(Model model) throws Exception {
        return commentService.commentList();
    }



}
