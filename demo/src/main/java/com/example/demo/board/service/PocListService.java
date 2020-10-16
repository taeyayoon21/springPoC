package com.example.demo.board.service;




import com.example.demo.board.domain.PocListVO;
import com.example.demo.board.mapper.PocListMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("com.example.demo.board.service.PocListService")
public class PocListService {

    @Resource(name="com.example.demo.board.mapper.PocListMapper")
    PocListMapper pocListMapper;

    public List<PocListVO> pocRowListService() throws Exception {
    	System.out.println("######################Service : "+pocListMapper.pocList());
        return pocListMapper.pocList();
    }

    
}