package com.rishabh.travelin.Controller;

import com.rishabh.travelin.DTO.JourneyResponseDTO;
import com.rishabh.travelin.Model.Journey;
import com.rishabh.travelin.Model.User;
import com.rishabh.travelin.Repository.JourneyRepository;
import com.rishabh.travelin.Repository.UserRepository;
import com.rishabh.travelin.Service.JourneyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/journey")

public class JourneyController {
    @Autowired
    private JourneyRepository journeyRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JourneyService journeyService;
    @PostMapping("/add")

    public Journey addJourney(@RequestBody Journey journey , String email){
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        journey.setUser(user);
        return journeyRepository.save(journey);


    }

    @GetMapping("/search")


    public ResponseEntity<List<JourneyResponseDTO>> searchJourneys(@RequestParam String destination){
        return ResponseEntity.ok(journeyService.getJourneyByDestination(destination));
    }
}
