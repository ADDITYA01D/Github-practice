package com.bookstore.service;

import java.util.List;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.GetReviewDTO;
import com.bookstore.dto.ReviewDTO;
import com.bookstore.entities.Review;

public interface ReviewService {

	public ApiResponse createReview(Long userId,Long bookId,ReviewDTO reviewDTO) ;
	
	public List<GetReviewDTO> getAllReview(Long bookId);
	
	
}