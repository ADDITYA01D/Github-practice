package com.bookstore.dto;

import com.bookstore.entities.Book;
import com.bookstore.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDTO {

	private Long bookId;
	private Long customerId;
}
