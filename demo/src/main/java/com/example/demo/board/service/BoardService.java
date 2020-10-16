package com.example.demo.board.service;

import com.example.demo.board.domain.BoardVO;
import com.example.demo.board.domain.FileVO;
import com.example.demo.board.mapper.BoardMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("com.example.demo.board.service.BoardService")
public class BoardService {

    @Resource(name="com.example.demo.board.mapper.BoardMapper")
    BoardMapper boardMapper;

    public List<BoardVO> boardListService() throws Exception {
        return boardMapper.boardList();
    }

    public BoardVO boardDetailService(int iBoard) throws Exception {
        return boardMapper.boardDetail(iBoard);
    }

    public int boardInsertService(BoardVO boardVO) throws Exception {
        return boardMapper.boardInsert(boardVO);
    }

    public int boardUpdateService(BoardVO boardVO) throws Exception {
        return boardMapper.boardUpdate(boardVO);
    }

    public int boardDeleteService(int idBoard) throws Exception {
        return boardMapper.boardDelete(idBoard);
    }

    public int fileInsertService(FileVO file) throws Exception {
        return boardMapper.fileInsert(file);
    }

    public FileVO fileDetailService(int boardNo) throws Exception {
        return boardMapper.fileDetail(boardNo);
    }
}
