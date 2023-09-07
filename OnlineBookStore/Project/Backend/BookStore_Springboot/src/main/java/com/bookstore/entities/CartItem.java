package com.bookstore.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "cart_item")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CartItem extends BaseEntity{
	
	@ManyToOne
	@JoinColumn(name = "book_id")
	private Book book;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id")
	private Customer customer;
	
	@Column(name = "quantity",columnDefinition = "int default 1")
	private int quantity;
	
	private double totalPrice;
	
	private double totalDiscountedPrice;
	
	public CartItem(Book book, Customer customer, double totalPrice, double totalDiscountedPrice) {
		this.book = book;
		this.customer = customer;
		this.totalPrice = totalPrice;
		this.totalDiscountedPrice = totalDiscountedPrice;
	}
}
