package com.bookstore.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.bookstore.entities.Customer;
import com.bookstore.entities.User;

public class CustomUserDetails implements UserDetails {
//	private Customer customer;
	private User user;
	

//	public CustomUserDetails(Customer customer) {
//		super();
//		this.customer = customer;
//	}
	
	public CustomUserDetails(User user) {
		super();
		this.user = user;
		System.out.println("<----------------here3");
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// Can I return List<SimpleGrantedAuthority> ? YESS
		System.out.println(user.getRole());
		return List.of(new SimpleGrantedAuthority(user.getRole().name()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getEmail();
	}

//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// Can I return List<SimpleGrantedAuthority> ? YESS
//		return List.of(new SimpleGrantedAuthority(customer.getRole().name()));
//	}
//
//	@Override
//	public String getPassword() {
//		// TODO Auto-generated method stub
//		return customer.getPassword();
//	}
//
//	@Override
//	public String getUsername() {
//		// TODO Auto-generated method stub
//		return customer.getEmail();
//	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
//	public Customer getCustomer() {
//		return customer;
//	}
	
	public User getUser() {
		return user;
	}

}
