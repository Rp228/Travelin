package com.rishabh.travelin.Service;

import com.rishabh.travelin.DTO.JourneyResponseDTO;
import com.rishabh.travelin.Model.Journey;
import com.rishabh.travelin.Repository.JourneyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service

public class JourneyService {
    @Autowired

    private JourneyRepository journeyRepository;
    public List<JourneyResponseDTO> getJourneyByDestination(String destination){
        List<Journey> journeys = journeyRepository.findByDestinationContainingIgnoreCase(destination);


        return journeys.stream().map(journey -> new JourneyResponseDTO(
                journey.getId(),
                journey.getDescription(),
                journey.getDestination(),
                journey.getUser().getName(),
                journey.getTravelDate())).collect(Collectors.toList());
    }

}
