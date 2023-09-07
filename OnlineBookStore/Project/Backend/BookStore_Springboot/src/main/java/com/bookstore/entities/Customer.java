package com.bookstore.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Table(name = "customer")
public class Customer extends BaseEntity{
	
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
	
//	@Enumerated(EnumType.STRING)
//	@Column(name = "role",columnDefinition = "varchar(20) default 'USER'")
//	private Role role;
	

	@OneToMany(mappedBy="customer", cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Address> addressList = new ArrayList<>();
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="default_address_id")
	private Address defaultAddress;

	
	@JsonIgnore //NOT SURE
	@OneToMany(mappedBy="customer",cascade = CascadeType.ALL,orphanRemoval=true)
	private List<Review> reviews=new ArrayList<>();

	@OneToMany(mappedBy="customer", cascade = CascadeType.ALL,orphanRemoval = true)
	private List<CartItem> cartItems = new ArrayList<>(); 
	
	@OneToMany(mappedBy="customer", cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Order> orders = new ArrayList<>();
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
}
