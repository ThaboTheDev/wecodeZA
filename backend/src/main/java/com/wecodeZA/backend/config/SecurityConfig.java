package com.wecodeZA.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // Security filter chain with CORS support
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/health", "/api/v1/user/new").permitAll() // Public endpoints
                        .requestMatchers("/").permitAll()) // You can change this to .authenticated() if needed
                .httpBasic()
                .cors0() // Enable CORS for Spring Security
                .and()
                .build();
    }

    // Enable CORS globally for all endpoints
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // Allow CORS from the frontend application (adjust the URL accordingly)
                registry.addMapping("/")  // Apply to all endpoints
                        .allowedOrigins("http://localhost:3000") // Adjust this to your frontend URL
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow methods you need
                        .allowedHeaders("*") // Allow all headers
                        .allowCredentials(true); // If your frontend sends credentials (cookies)
            }
        };
    }
}