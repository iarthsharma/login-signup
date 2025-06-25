package com.example.loginsignup.controller;

import com.example.loginsignup.model.User;
import com.example.loginsignup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    // Register a new user
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        // Check if the user already exists
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return "Username already exists";
        }

        // Encrypt the password before saving it to the database
        user.setPassword(encoder.encode(user.getPassword()));

        // Save the new user to MongoDB
        userRepository.save(user);
        return "User registered successfully";
    }

    // Login a user
    @PostMapping("/login")
    public String login(@RequestBody User loginRequest) {
        // Find the user by username
        User user = userRepository.findByUsername(loginRequest.getUsername());
        if (user == null) {
            return "User not found";
        }

        // Compare the provided password with the stored encrypted password
        if (encoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return "Login successful";
        } else {
            return "Invalid password";
        }
    }
}
