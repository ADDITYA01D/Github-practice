package com.bookstore.dto;

import com.bookstore.entities.Role;

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
public class AuthResp {
	private Long id;

	private String email;

 //	private String password;

	private String firstName;
	private String lastName;
	private String mobile;
	

	private Role role;

	private String token;
}
