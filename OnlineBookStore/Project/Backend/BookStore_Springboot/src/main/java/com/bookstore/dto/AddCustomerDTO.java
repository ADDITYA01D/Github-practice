package com.bookstore.dto;

import com.bookstore.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AddCustomerDTO 
{
	private Role role;
	private String firstName;
	private String lastName;
	private String email;
	private String mobile;
	private String password;
}
