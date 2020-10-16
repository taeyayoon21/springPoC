FROM openjdk:8-jre
COPY target/mvn-springMVC_*.war app.war
ENTRYPOINT ["java", "-jar", "app.war"]