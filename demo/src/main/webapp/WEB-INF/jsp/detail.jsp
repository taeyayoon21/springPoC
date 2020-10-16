<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="layoutTag" tagdir="/WEB-INF/tags"  %>
<layoutTag:layout>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Detail</title>
</head>
<body>

<h2> 게시글 상세 </h2>

<button class="btn btn-primary" onclick="location.href='/update/${detail.idBoard}'">수정</button>
<button class="btn btn-danger" onclick="location.href='/delete/${detail.idBoard}'">삭제</button>

<div class="container">
    <form action="/insert" method="post">
      <div class="form-group">
        <label>제목</label>
        <p>${detail.subject}</p>
      </div>
      <div class="form-group">
        <label>작성자</label>
        <p>${detail.writer}</p>
      </div>
      <div class="form-group">
        <label>작성날짜</label>
        <p>${detail.create_date}</p>
      </div>
      <div class="form-group">
        <label>첨부파일</label>
        <p><a href="/fileDownload/${files.boardNo}">${files.fileOriginalName}</a></p>
      </div>
      <div class="form-group">
        <label>내용</label>
        <p>${detail.content}</p>
      </div>
      <button type="submit" class="btn btn-primary">작성</button>
    </form>

    <div class="container">
        <label for="content">comment</label>
        <form name="commentInsertForm">
        <div class="input-group">
            <input type="hidden" name="idBoard" value="${detail.idBoard}">
            <input type="text" class="form-control" id="content" name="content" placeholder="내용을 입력하세요.">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" name="commentInsertButton">등록</button>
            </span>
        </div>
        </form>
    </div>

    <div class="container">
        <div class="commentList"></div>
    </div>

</div>
</body>
</html>
<%@include file="comment.jsp" %>
</layoutTag:layout>