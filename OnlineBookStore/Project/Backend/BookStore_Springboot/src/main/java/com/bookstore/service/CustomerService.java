package com.bookstore.service;

import java.util.List;

import com.bookstore.dto.AddCustomerDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.CustomerDTO;
import com.bookstore.dto.UpdateCustomerDTO;


public interface CustomerService 
{
//	public ApiResponse addCustomer(AddCustomerDTO userDTO);
	
	public List<CustomerDTO> getAllCustomers();
	
	public ApiResponse deleteCustomer(Long id);

	public ApiResponse updateCustomer(UpdateCustomerDTO detachedUser);

}
