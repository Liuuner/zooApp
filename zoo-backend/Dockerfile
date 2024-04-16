FROM maven:3-openjdk-17 AS builder

WORKDIR /zooApp
COPY . .
CMD mvn clean install compile package

FROM openjdk:17-jdk-alpine

WORKDIR /zooApp
COPY --from=builder /zooApp/target/zoo-backend-1.jar .

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "zoo-backend-1.jar"]