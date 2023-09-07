package com.bookstore.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class OnlyAuthorDTO {
	private Long id;
	private String name;
	private String bio;
}
