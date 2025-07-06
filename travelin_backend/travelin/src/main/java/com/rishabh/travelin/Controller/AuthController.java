package com.rishabh.travelin.Controller;

import com.rishabh.travelin.Model.User;
import com.rishabh.travelin.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")

public class AuthController {
    @Autowired
    private  UserRepository userRepository;
    @PostMapping("/signup")

    public ResponseEntity<String> signup(@RequestBody User user){
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if(existingUser.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("email already exists please login");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered Successfully");

    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginUser){
        Optional<User> useropt = userRepository.findByEmail(loginUser.getEmail());

        if(useropt.isEmpty()){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid name or password");

        }
        User  user = useropt.get();
        if (!user.getPassword().equals(loginUser.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }

        return ResponseEntity.ok("Login successful");
    }


}
