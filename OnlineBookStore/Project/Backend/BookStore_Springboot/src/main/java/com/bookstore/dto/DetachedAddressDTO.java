package com.bookstore.dto;

import javax.persistence.Column;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class DetachedAddressDTO 
{
	private Long id;
	private String city;	
	private String street;
	private String landmark;	
	private String state;
	private String zipcode;
	private String mobile;
	private String isDefault = "false";
	private String fullName;
	private String houseInfo;
}
