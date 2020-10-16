package com.example.demo.board.domain;

import com.example.demo.board.exception.WrongIdPasswordException;

import java.io.Serializable;

public class AccountVO extends CommonBean implements Serializable {

    private static final long serialVersionUID = 8325859627946261279L;

    private Long index;
    private String id;
    private String password;
    private String name;

    public Long getIndex() {
        return index;
    }

    public void setIndex(Long index) {
        this.index = index;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void changePassword(String oldPassword, String newPassword) {
        if (!password.equals(oldPassword))
            throw new WrongIdPasswordException();
        this.password = newPassword;
    }

    public boolean matchPassword(String password) {
        return this.password.equals(password);
    }

    @Override
    public String toString() {
        return "AccountVO{" +
                "index=" + index +
                ", id='" + id + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}