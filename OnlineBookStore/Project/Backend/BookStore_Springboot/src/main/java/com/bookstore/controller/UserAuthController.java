package com.bookstore.controller;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.custom_exceptions.UserAlreadyExistsException;
import com.bookstore.dto.AddCustomerDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.AuthResp;
import com.bookstore.dto.SignUpRequest;
import com.bookstore.dto.SigninRequest;
import com.bookstore.dto.UserDTO;
import com.bookstore.entities.Admin;
import com.bookstore.entities.Customer;
import com.bookstore.entities.Role;
import com.bookstore.entities.User;
import com.bookstore.jwt_utils.JwtUtils;
import com.bookstore.repository.AdminRepository;
import com.bookstore.repository.CustomerRepository;
import com.bookstore.repository.UserRepository;
import com.bookstore.security.CustomUserDetails;
import com.bookstore.service.CustomerService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserAuthController {
//dep :
	@Autowired
	private AuthenticationManager mgr;
	@Autowired
	private JwtUtils utils;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CustomerService customerService;
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private CustomerRepository customerRepository;

	/*
	 * request payload : Auth req DTO : email n password resp payload : In case of
	 * success : Auth Resp DTO : mesg + JWT token + SC 200 IN case of failure : SC
	 * 401
	 */
	@PostMapping("/signin")
	public ResponseEntity<?> signIn(@RequestBody @Valid SigninRequest request) {
		System.out.println("in sign in " + request);
		// invoke autheticate(...) of Authenticate for auth
		Authentication principal = mgr
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		System.out.println("here -------------------->");
		CustomUserDetails userDetails = (CustomUserDetails)principal.getPrincipal();
		
		User user = userDetails.getUser();
		AuthResp res = new AuthResp();
		if(user.getRole() == Role.ROLE_ADMIN) {
			res = mapper.map(user.getAdmin(), AuthResp.class);
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Unauthorized"));
		}else if( user.getRole() == Role.ROLE_CUSTOMER) {
			res = mapper.map(user.getCustomer(), AuthResp.class);			
		}
		
		res.setRole(user.getRole());
		res.setToken(utils.generateJwtToken(principal));
		return ResponseEntity.ok(res);
	}
	
//	@PostMapping("/signup")
//	public ResponseEntity<?> userRegistration(@RequestBody @Valid AddUserDTO user) {
//		System.out.println("in reg user : user " );
//		// invoke service layer method , for saving : user info + associated roles info
//		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addUser(user));
//	}
	@PostMapping("/signup")
	public ApiResponse addUser(@RequestBody UserDTO userDTO) 
	{
		
		if(userRepository.existsByEmail(userDTO.getEmail())) {
			throw new UserAlreadyExistsException("User Already Exists");
		}
		userDTO.toString();
		User user = new User();
		user.setEmail(userDTO.getEmail());
		user.setPassword(encoder.encode(userDTO.getPassword()));
		
		user.setRole(Role.ROLE_CUSTOMER);
		User user1 = userRepository.save(user);
		if(user.getRole() == Role.ROLE_CUSTOMER) {
			
			Customer customer = mapper.map(userDTO, Customer.class);
			
			System.out.println("here <----------------");
			customer.setUser(user1);
			if(customerRepository.existsByEmail(customer.getEmail())) {
				throw new UserAlreadyExistsException("Customer Already Exists");
			}
			customerRepository.save(customer);
			ApiResponse apiResponse = new ApiResponse("USER ADDED SUCCESSFULLY..!!");
			return apiResponse;
		} else  if(user.getRole() == Role.ROLE_ADMIN){
			Admin admin = mapper.map(userDTO, Admin.class);
			admin.setUser(user1);
			if(adminRepository.existsByEmail(admin.getEmail())) {
				throw new UserAlreadyExistsException("Admin Already Exists");
			}
			adminRepository.save(admin);
			return new ApiResponse("Admin ADDED SUCCESSFULLY..!!");
		} else {
			return new ApiResponse("Unexpected Error");
		}
	}
	
}
