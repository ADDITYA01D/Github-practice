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
public class AdminBookDTO 
{
	private Long isbn;
	private String title;
	private String description;
	
	private double price;
	private double discountedPrice;
	//private String name;
	//private GetAuthorDTO authorName;
	private int quantity;
	
}
