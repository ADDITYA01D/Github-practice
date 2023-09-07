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
public class GetAuthorDTO {

	private String name;
	private String imagePath;
	private String bio;
}
