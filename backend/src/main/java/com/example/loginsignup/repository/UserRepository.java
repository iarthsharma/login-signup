package com.example.loginsignup.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.loginsignup.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
}