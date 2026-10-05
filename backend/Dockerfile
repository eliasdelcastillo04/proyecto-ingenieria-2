# DermaCare Backend Dockerfile
FROM eclipse-temurin:17-jre
WORKDIR /app

RUN useradd -m -u 1001 appuser
COPY target/*.jar app.jar
RUN chown -R appuser:appuser /app

USER appuser
EXPOSE 8080

ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0 -Djava.security.egd=file:/dev/./urandom"
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
