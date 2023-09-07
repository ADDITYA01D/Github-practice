package com.bookstore.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CustomerAddressDTO {
	private Long id;
	private String street;
	private String landmark;
	private String city;
	private String state;
	private String country;
	private String zipcode;
}
