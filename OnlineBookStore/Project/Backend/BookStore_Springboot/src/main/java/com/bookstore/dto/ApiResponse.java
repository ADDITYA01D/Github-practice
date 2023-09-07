package com.bookstore.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class ApiResponse {
	private String message;
	private LocalDateTime timestamp;

	public ApiResponse(String message) {
		this.message = message;
		this.timestamp = LocalDateTime.now();

	}
}

