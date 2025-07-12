package com.rishabh.travelin.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class JourneyResponseDTO {

    private Long id;
    private String destination;
    private String travelDate;
    private String description;
    private String author;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getTravelDate() {
        return travelDate;
    }

    public void setTravelDate(String travelDate) {
        this.travelDate = travelDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public JourneyResponseDTO(Long id, String destination, String travelDate, String description, String author) {
        this.id = id;
        this.destination = destination;
        this.travelDate = travelDate;
        this.description = description;
        this.author = author;
    }
}
