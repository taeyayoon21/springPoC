package com.example.demo.board.mapper;

import com.example.demo.board.domain.CommentVO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("com.example.demo.board.mapper.CommentMapper")
public interface CommentMapper {
    List<CommentVO> commentList() throws Exception;

}
