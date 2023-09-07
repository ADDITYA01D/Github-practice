package com.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.bookstore.dto.AddCustomerDTO;
import com.bookstore.dto.UpdateCustomerDTO;
import com.bookstore.service.CustomerService;


@RestController
@RequestMapping("/customer")
public class CustomerController
{
	@Autowired
	private CustomerService customerService;
	
//	@PostMapping("/register")
//	public ResponseEntity<?> addCustomer(@RequestBody AddCustomerDTO customerDTO)
//	{
//		System.out.println("inside register controller");
//		return ResponseEntity.status(HttpStatus.OK).body(customerService.addCustomer(customerDTO));
//	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAllCustomer() {
		return ResponseEntity.status(HttpStatus.FOUND).body(customerService.getAllCustomers());
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteCustomer(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.FOUND).body(customerService.deleteCustomer(id));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateCustomer(@RequestBody UpdateCustomerDTO detachedCustomer){
		return ResponseEntity.status(HttpStatus.OK).body(customerService.updateCustomer(detachedCustomer));	
	}
}
