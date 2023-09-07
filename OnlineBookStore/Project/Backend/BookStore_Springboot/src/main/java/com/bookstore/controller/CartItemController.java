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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.AddressDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.CartItemDTO;
import com.bookstore.dto.CartItemQtyDTO;
import com.bookstore.dto.DisplayCartItemDTO;
import com.bookstore.entities.CartItem;
import com.bookstore.entities.User;
import com.bookstore.service.CartItemService;
import com.bookstore.service.CustomerService;


	@RestController
	@RequestMapping("/cart_items")
	public class CartItemController {

		@Autowired
		private CartItemService cartItemService;
		@Autowired
		private CustomerService customerService;
		
		@PostMapping("/add")
		public ResponseEntity<?> addItemsToCart(@RequestBody CartItemDTO cartItemDTO) throws ResourceNotFoundException{
			System.out.println("inside cart controller");
			System.out.println(cartItemDTO);
			return ResponseEntity.status(HttpStatus.OK).body(cartItemService.addItem(cartItemDTO));
		}
		
		@GetMapping("/get_cart/{customerId}")
		public List<DisplayCartItemDTO> getCartItems(@PathVariable Long customerId) throws ResourceNotFoundException{
			System.out.println("inside getCartItems(): ");
			System.out.println("customerId passed : " + customerId);
			return cartItemService.getCartItems(customerId);
		}
		
		@PutMapping("/cart_update/{cartItemId}")
		public ResponseEntity<?>updateCartItemHandler(@PathVariable Long cartItemId, @RequestBody CartItemQtyDTO cartItemQtyDTO) throws ResourceNotFoundException{
			return ResponseEntity.status(HttpStatus.OK).body(cartItemService.updateItemQty(cartItemId, cartItemQtyDTO));
		}
		
		
		@DeleteMapping("/cart_delete/{cartItemId}")
		public ResponseEntity<?>deleteCartItemHandler(@PathVariable Long cartItemId) throws ResourceNotFoundException{
			return ResponseEntity.status(HttpStatus.OK).body(cartItemService.deleteItem(cartItemId));
		}
		
		@DeleteMapping("/cart_del/{bookId}/{customerId}")
		public ResponseEntity<?>deleteCartItem(@PathVariable Long bookId, @PathVariable Long customerId) throws ResourceNotFoundException{
			return ResponseEntity.status(HttpStatus.OK).body(cartItemService.deleteCart(bookId, customerId));
		}
	
		@GetMapping("/cart_exists/{bookId}/{customerId}")
		public Boolean isCartExists(@PathVariable Long bookId, @PathVariable Long customerId) throws ResourceNotFoundException{
			return cartItemService.isCartExists(bookId, customerId);
		}
}
