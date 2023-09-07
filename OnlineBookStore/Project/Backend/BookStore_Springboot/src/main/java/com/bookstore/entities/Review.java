package com.bookstore.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name="review")
public class Review extends BaseEntity
{
	

	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="customer_id",nullable=false)
	private Customer customer;
	
	@ManyToOne(fetch=FetchType.LAZY)
	//@JsonIgnore //NOT SURE
	@JoinColumn(name="book_id",nullable=false)
	private Book book;
	
	@Column(name="review", length = 1500)
	private String review;
	
	@Column(name="rating")
	private double rating;
	
	@Column(name="created_at")
	private LocalDateTime createdAt;
}
