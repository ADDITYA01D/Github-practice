package com.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.dto.AddressDTO;
import com.bookstore.dto.DetachedAddressDTO;
import com.bookstore.service.AddressService;

@RestController
@RequestMapping("/address")
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
	
	@Autowired
	public AddressService addressService;
	
	@PostMapping("/addtocustomer/{customerId}")
	public ResponseEntity<?> addressDetails(@PathVariable Long customerId, @RequestBody AddressDTO addressDTO) {
		return ResponseEntity.status(HttpStatus.OK).body(addressService.addAddress(customerId, addressDTO));
	}
	
	@GetMapping("/customer/{customerId}")
	public ResponseEntity<?> getAddress(@PathVariable Long customerId) {
		return ResponseEntity.status(HttpStatus.OK).body(addressService.getAddress(customerId));
	}
	
	@DeleteMapping("/addressid/{addressId}")
	public ResponseEntity<?> deleteAddress(@PathVariable Long addressId) {
		return ResponseEntity.status(HttpStatus.OK).body(addressService.deleteAddress(addressId));
	}
	
	@PutMapping("/customer/{customerId}")
	public ResponseEntity<?>  updateAddress(@PathVariable Long customerId, @RequestBody DetachedAddressDTO detachedAddressDTO) {
		return ResponseEntity.status(HttpStatus.OK).body(addressService.updateAddress(customerId, detachedAddressDTO));
	}
	
	@GetMapping("/address/customer/{addressId}/{customerId}")
	public ResponseEntity<?> getAddressById(@PathVariable Long addressId, @PathVariable Long customerId) {
		return ResponseEntity.status(HttpStatus.OK).body(addressService.getAddressById(addressId, customerId));
	}
	
	@GetMapping("/default/{customerId}")
	public ResponseEntity<?> getDefaultAddress(@PathVariable Long customerId) {
		return ResponseEntity.status(HttpStatus.OK).body(addressService.getDefaultAddress(customerId));
	}
	

}
