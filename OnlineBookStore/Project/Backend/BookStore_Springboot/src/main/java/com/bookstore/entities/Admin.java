package com.bookstore.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Admin extends BaseEntity{
	@Column(name = "first_name", length = 40, nullable = false)
	private String firstName;
	
	@Column(name = "last_name", length = 40)
	private String lastName;
	
	@Column(name = "email", length = 40, unique = true, nullable = false)
	private String email;
	
	@Column(name = "mobile", length = 40)
	private String mobile;
	
	@Column(name = "password", length = 4000)
	private String password;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
}
