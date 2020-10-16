package com.example.demo.board.domain;

public class FileVO {

    private int fileNo;
    private int boardNo;
    private String fileName;
    private String fileOriginalName;
    private String fileUrl;

    public int getFileNo() {
        return fileNo;
    }

    public void setFileNo(int fileNo) {
        this.fileNo = fileNo;
    }

    public int getBoardNo() {
        return boardNo;
    }

    public void setBoardNo(int boardNo) {
        this.boardNo = boardNo;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileOriginalName() {
        return fileOriginalName;
    }

    public void setFileOriginalName(String fileOriginalName) {
        this.fileOriginalName = fileOriginalName;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    @Override
    public String toString() {
        return "FileVO{" +
                "fileNo=" + fileNo +
                ", boardNo=" + boardNo +
                ", fileName='" + fileName + '\'' +
                ", fileOriginalName='" + fileOriginalName + '\'' +
                ", fileUrl='" + fileUrl + '\'' +
                '}';
    }
}
