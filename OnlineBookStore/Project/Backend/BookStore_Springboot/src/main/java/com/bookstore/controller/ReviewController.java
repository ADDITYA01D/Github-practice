package com.bookstore.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.GetReviewDTO;
import com.bookstore.dto.ReviewDTO;
import com.bookstore.entities.Review;
import com.bookstore.service.ReviewService;
import com.bookstore.service.CustomerService;


@RestController
@RequestMapping("/reviews")
public class ReviewController 
{
	
	public ReviewService reviewService;
	
	
	@PostMapping("/add/{customerId}/{bookId}")
	public ResponseEntity<?> addReview(@PathVariable Long customerId,@PathVariable Long bookId,@RequestBody ReviewDTO reviewDTO)
	{
		return ResponseEntity.status(HttpStatus.OK).body(reviewService.createReview(customerId,bookId,reviewDTO));
	}
	
	private CustomerService customerService;
	


	@GetMapping("/get/{bookId}")
	public List<GetReviewDTO> getBooksReviewHandler(@PathVariable Long bookId){
	
		return reviewService.getAllReview(bookId);
		
	}

}
