package com.bookstore.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartBookDTO {

	private Long id;
	private String title;
	private String authorName;
	private String imagePath;
	private double discountedPrice; 
	private int quantity;
}
