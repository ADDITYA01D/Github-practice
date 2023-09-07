package com.bookstore.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ReviewDTO  {

	private double rating;
	private String review;
	private LocalDateTime createdAt;
	
	
}

