package com.bookstore.dto;



import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class GetReviewDTO 
{
	private double rating;
	private String review;
	private CustomerReviewDTO userReviewDTO;
	//List<BookReviewDTO> bookReviewDTO;
}
