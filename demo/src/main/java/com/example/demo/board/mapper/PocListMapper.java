package com.example.demo.board.mapper;

import com.example.demo.board.domain.PocListVO;
import com.example.demo.board.domain.FileVO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("com.example.demo.board.mapper.PocListMapper")
public interface PocListMapper {
    List<PocListVO> pocList() throws Exception;



    
    //List<PocListVO> pocList() throws Exception;
}
