package com.example.demo.board.mapper;

import com.example.demo.board.domain.AccountVO;
import org.springframework.stereotype.Repository;

@Repository("com.example.demo.board.mapper.AccountMapper")
public interface AccountMapper {

    AccountVO selectAccountByUsername(String userid);
}
