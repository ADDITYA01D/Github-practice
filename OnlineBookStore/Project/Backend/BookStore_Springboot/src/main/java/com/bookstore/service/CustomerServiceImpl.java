package com.bookstore.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.custom_exceptions.UserAlreadyExistsException;
import com.bookstore.dto.AddAuthorDTO;
import com.bookstore.dto.AddCustomerDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.AuthorBookDTO;
import com.bookstore.dto.AuthorDTO;
import com.bookstore.dto.CustomerDTO;
import com.bookstore.dto.OnlyAuthorDTO;
import com.bookstore.dto.UpdateCustomerDTO;
import com.bookstore.entities.Author;
import com.bookstore.entities.Customer;
import com.bookstore.entities.Role;
import com.bookstore.entities.User;
import com.bookstore.repository.CustomerRepository;
import com.bookstore.repository.UserRepository;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;


@Service
@Transactional
public class CustomerServiceImpl implements CustomerService
{
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	//private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserRepository userRepository;
	
	
//	@Override
//	public ApiResponse addCustomer(AddCustomerDTO customerDTO) 
//	{
//		
//		if(userRepository.existsByEmail(customerDTO.getEmail())) {
//			throw new UserAlreadyExistsException("User Already Exists");
//		}
//		User user = new User();
//		user.setEmail(customerDTO.getEmail());
//		user.setPassword(encoder.encode(customerDTO.getPassword()));
////		person.setRole(userDTO.getRole());
//		user.setRole(Role.ROLE_ADMIN);
//		User user1 = userRepository.save(user);
//		
//		
//		Customer customer = mapper.map(customerDTO, Customer.class);
//		
//		customer.setUser(user1);
//		if(customerRepository.existsByEmail(customer.getEmail())) {
//			throw new UserAlreadyExistsException("User Already Exists");
//		}
//		
////		user.setPassword(encoder.encode(userDTO.getPassword()));
////		user.setRole(Role.USER);
//		customerRepository.save(customer);
//		ApiResponse apiResponse = new ApiResponse("USER ADDED SUCCESSFULLY..!!");
//		return apiResponse;
//	}
	
	@Override
	public List<CustomerDTO> getAllCustomers() {
		List<CustomerDTO> customerList = new ArrayList<>();
		customerRepository.findAll().forEach(i -> customerList.add(new CustomerDTO(i.getId(), i.getFirstName(), i.getLastName(), i.getEmail(), i.getMobile(), i.getPassword())));;
		return customerList;
	}
	
	@Override
	public ApiResponse deleteCustomer(Long id) {
		Customer user = customerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!"));
		customerRepository.delete(user);
		ApiResponse apiResponse = new ApiResponse("Customer deleted successfully!");
		return apiResponse;
	}
	/*
	@Override
	public Customer findCustomerById(Long userId)
	{
		Customer user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!"));
		return user;
	}
	*/
	/*
	@Override
	public Customer findCustomerProfileByJwt(String jwt) throws ResourceNotFoundException {
		System.out.println("user service");
		String email=jwtTokenProvider.getEmailFromJwtToken(jwt);
		
		System.out.println("email"+email);
		
		Customer user=userRepository.findByEmail(email);
		
		
		
		if(user==null) {
			throw new ResourceNotFoundException("user not exist with email "+email);
		}
		System.out.println("email user"+user.getEmail());
		return user;
	}
	*/
	

	public ApiResponse updateCustomer(UpdateCustomerDTO detachedCustomer) {
		Customer customer = customerRepository.findById(detachedCustomer.getId()).orElseThrow(() -> new ResourceNotFoundException("Something went wrong!"));
		customer.setFirstName(detachedCustomer.getFirstName());
		customer.setLastName(detachedCustomer.getLastName());
		customer.setEmail(detachedCustomer.getEmail());
		customer.setMobile(detachedCustomer.getMobile());
		customer.setPassword(detachedCustomer.getPassword());
		customerRepository.save(customer);
		return new ApiResponse("Customer updated successfully!");
	}
}











