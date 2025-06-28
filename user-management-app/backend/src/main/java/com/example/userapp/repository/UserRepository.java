package com.example.userapp.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.userapp.model.User;
public interface UserRepository extends MongoRepository<User, String> {
}
