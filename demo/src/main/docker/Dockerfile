FROM java:8
VOLUME /tmp
# ADD mvn-springMVC_1.war app.jar
ADD ./mvn-springMVC_1.war app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-war","/app.jar"]
