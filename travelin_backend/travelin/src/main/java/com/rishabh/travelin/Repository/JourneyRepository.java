package com.rishabh.travelin.Repository;

import com.rishabh.travelin.Model.Journey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JourneyRepository extends JpaRepository<Journey,Long> {
    List<Journey> findByDestinationContainingIgnoreCase(String destination);


}
