package com.bookstore.dto;

import com.bookstore.entities.BookCategory;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OnlyBookDTO {

	private Long id;
	private Long isbn;
	private String title;
	private String description;
	private BookCategory category;
	private double price;
	private double discountedPrice;
	private Long authorId;
	private int quantity;
	private String imagePath;
	
}
