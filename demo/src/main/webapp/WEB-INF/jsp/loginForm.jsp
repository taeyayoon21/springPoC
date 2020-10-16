<%@ page contentType="text/html; charset=utf-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <form:form modelAttribute="loginDto">
    <form:errors />
    <p>
        <label>username ver 12:<br>
        <form:input path="username" />
        <form:errors path="username"/>
        </label>
    </p>
    <p>
        <label>password:<br>
        <form:password path="password" />
        <form:errors path="password"/>
        </label>
    </p>
    <p>
        <label>rememberEmail:
        <form:checkbox path="rememberEmail"/>
        </label>
    </p>
    <input type="submit" value="login"/>
    </form:form>
</body>
</html>
