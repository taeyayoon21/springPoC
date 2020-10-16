<%@ page contentType="text/html; charset=utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
<head>
    <title>로그인 테스트</title>
</head>
<body>
    <p>
        로그인에 성공했습니다.
    </p>
    <p>
        <a href="<c:url value='/list'/>">
            [메인으로이동]
        </a>
    </p>
</body>
</html>
