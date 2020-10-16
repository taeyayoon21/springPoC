package com.example.demo.board.mapper;

import com.example.demo.board.domain.BoardVO;
import com.example.demo.board.domain.FileVO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("com.example.demo.board.mapper.BoardMapper")
public interface BoardMapper {
    List<BoardVO> boardList() throws Exception;

    BoardVO boardDetail(int iBoard) throws Exception;

    int boardInsert(BoardVO boardVO) throws Exception;

    int boardUpdate(BoardVO boardVO) throws Exception;

    int boardDelete(int idBoard) throws Exception;

    int fileInsert(FileVO file) throws Exception;

    FileVO fileDetail(int idBoard) throws Exception;

}
