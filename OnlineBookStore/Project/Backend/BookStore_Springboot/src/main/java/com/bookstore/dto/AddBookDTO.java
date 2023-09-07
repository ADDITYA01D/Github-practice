package com.bookstore.dto;

import com.bookstore.entities.BookCategory;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddBookDTO {

	private long isbn;
	private String title;
	private String description;
	private BookCategory category;
	private double price;
	private double discountedPrice;
	private long authorId;
	private int quantity;
	private String imagePath;
	
}
