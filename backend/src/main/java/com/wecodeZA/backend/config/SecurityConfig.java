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
<<<<<<< HEAD
        return httpSecurity.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/health", "/api/v1/user/new").permitAll() // Public endpoints
                        .requestMatchers("/").permitAll()) // You can change this to .authenticated() if needed
                .build();
    }

    // Enable CORS globally for all endpoints
=======
        return httpSecurity.csrf(AbstractHttpConfigurer::disable) // Disable CSRF (adjust if needed)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("api/v1/user/new").permitAll() // Public endpoints
                        .requestMatchers("/**").permitAll()) // Allow all other endpoints (consider changing to .authenticated() for security)
                .httpBasic(Customizer.withDefaults()) // Basic HTTP authentication
                .cors(Customizer.withDefaults()) // Enable CORS in Spring Security
                .build();
    }

    // CORS Configuration with Spring Security Context
>>>>>>> 375b2abed6b7d71693b2f642fdd07097ec6310b7
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
<<<<<<< HEAD
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
=======
                // Apply CORS to all endpoints
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173") // Frontend URL
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
                        .allowedHeaders("*") // Allow all headers
                        .allowCredentials(true); // Allow credentials (cookies)
            }
        };
    }
}
>>>>>>> 375b2abed6b7d71693b2f642fdd07097ec6310b7
