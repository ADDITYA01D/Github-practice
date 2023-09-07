package com.bookstore.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DisplayCartItemDTO {
	
	private Long cartItemId;
	private CartBookDTO book;
	private Long customerId;
	private int quantity;
	private double totalPrice;
	private double totalDiscountedPrice;
}
