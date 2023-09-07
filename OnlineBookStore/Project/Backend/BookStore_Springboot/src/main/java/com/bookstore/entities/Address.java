package com.bookstore.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
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
@Table(name = "address")
public class Address extends BaseEntity{
	
	@Column(name = "full_name", length = 100)
	private String fullName;
	
	@Column(name = "mobile", length = 15)
	private String mobile;
	
	@Column(name = "house_info")
	private String houseInfo;
	
	@Column(name = "street", length = 100)
	private String street;
	
	@Column(name = "landmark", length = 100)
	private String landmark;
	
	@Column(name = "zipcode", length = 10)
	private String zipcode;
	
	@Column(name = "city", length = 20)
	private String city;
	
	@Column(name = "state", length = 20)
	private String state;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id")
	private Customer customer;
	
	@OneToOne(mappedBy = "defaultAddress")
	private Customer cust;
	
	@OneToOne(mappedBy = "shippingAddress")
	private Order order;

}
