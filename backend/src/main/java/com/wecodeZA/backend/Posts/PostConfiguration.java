package com.wecodeZA.backend.Posts;

import com.wecodeZA.backend.User.User;
import com.wecodeZA.backend.User.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import java.util.List;

@Configuration
public class PostConfiguration {

    @Order(2)
    @Bean
    CommandLineRunner postCommandLineRunner(PostRepository postRepository, UserRepository userRepository) {
        return args -> {
            // Fetch users from the database
            User sean = userRepository.findById(1L)
                    .orElseThrow(() -> new IllegalStateException("User not found"));

            User jean = userRepository.findById(2L)
                    .orElseThrow(() -> new IllegalStateException("User not found"));

            // Create sample posts
            Post post1 = new Post(sean, "Introduction to Spring Boot", "Java", "Spring Boot simplifies Java backend development.");
            Post post2 = new Post(sean, "REST APIs with Spring", "Web Development", "A guide to creating RESTful APIs.");
            Post post3 = new Post(jean, "Flutter vs React Native", "Mobile Development", "Comparison of two popular mobile frameworks.");
            Post post4 = new Post(jean, "Microservices Architecture", "Software Architecture", "Understanding microservices with Spring Cloud.");

            // Save posts to the database
            postRepository.saveAll(List.of(post1, post2, post3, post4));

            System.out.println("Sample posts saved." +
                    "" +
                    "");
        };
    }
}