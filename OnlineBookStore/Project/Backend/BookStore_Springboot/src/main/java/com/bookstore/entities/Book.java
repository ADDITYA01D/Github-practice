package com.bookstore.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.CodePointLength;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "book")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Book extends BaseEntity{
	
	@Column(name = "isbn")
	private long isbn;
	
	@Column(name = "title", nullable = false)
	private String title;
	
	@Column(name = "description", length = 1500)
	private String description;
	
	@Enumerated(EnumType.STRING)
	private BookCategory category;
	
	@Column(name = "price", nullable = false)
	private double price;
	
	@Column(name = "discounted_price", nullable = false)
	private double discountedPrice;
	
	@ManyToOne
//	@Column(name = "author_id")
	private Author author;
	
	@Column(nullable = false)
	private int quantity;
	
	@Column(name="image_path",length=512)
	private String imagePath;
	
	
	@OneToMany(mappedBy="book",cascade = CascadeType.ALL,orphanRemoval=true)
	private List<Review> reviews = new ArrayList<>();
	
	
//	@OneToMany(mappedBy="cartItembook",cascade = CascadeType.ALL,orphanRemoval=true)
//	private List<CartItem> cartItems = new ArrayList<>(); 
	
	
//	@OneToMany
//	private Wishlist wishlist;
	
//	@OneToOne(mappedBy="book")
//	private OrderItem orderItems;
	
}


