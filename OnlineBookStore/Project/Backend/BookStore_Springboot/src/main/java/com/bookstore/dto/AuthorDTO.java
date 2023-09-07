package com.bookstore.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthorDTO {
	private Long id;
	private String name;
	private String bio;
	private List<AuthorBookDTO> bookList;
	
}
