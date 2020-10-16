package com.example.demo.board.service;

import com.example.demo.board.domain.CommentVO;
import com.example.demo.board.mapper.CommentMapper;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import javax.annotation.Resource;
import java.util.List;

@Service("com.example.demo.board.service.CommentService")
public class CommentService {
    @Resource(name = "com.example.demo.board.mapper.CommentMapper")
    CommentMapper commentMapper;

    public List<CommentVO> commentList() throws Exception {
        return commentMapper.commentList();
    }
}
