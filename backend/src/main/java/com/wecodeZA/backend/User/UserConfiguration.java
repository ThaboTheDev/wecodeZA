package com.wecodeZA.backend.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Configuration
public class UserConfiguration {

    @Order(1)
    @Bean
    CommandLineRunner commandLineRunner(
            UserRepository repository) {
        return args -> {
            User sean = new User(
                    "Sean",
                    "Kembo",
                    "kembosean7",
                    "sekembojhb024@student.wethinkcode",
                    new BCryptPasswordEncoder().encode("kembosea72024"),
                    "Software Developer",
                    "Passionate Software Developer with 5+ years of experience in designing, developing, and maintaining web applications. Skilled in Java, Spring Boot, Python, and JavaScript, with a strong focus on backend development, microservices, and cloud computing.\n" +
                            "Enthusiastic about clean code, scalable architectures, and problem-solving. Adept at working in agile teams and collaborating with cross-functional teams to deliver high-quality software solutions."

            );

            User jean = new User(
                    "Jean-Claude",
                    "Kumm",
                    "jeankum22",
                    "jclaudhjbh024@student.wethinkcode",
                    new BCryptPasswordEncoder().encode("jeankumm2224"),
                    "Mobile Developer",
                    "Passionate Mobile Developer with 4+ years of experience in building high-performance iOS and Android applications. Skilled in Flutter, React Native, Kotlin, and Swift, with a strong focus on creating intuitive, user-friendly, and scalable mobile experiences.\n" +
                            "Enthusiastic about mobile UI/UX, app performance optimization, and integrating APIs. Experienced in working with Agile teams to deliver top-notch applications."


            );

            repository.saveAll(List.of(sean,jean));
            System.out.println("Saved users: " + List.of(sean, jean));



        };
    }


}
