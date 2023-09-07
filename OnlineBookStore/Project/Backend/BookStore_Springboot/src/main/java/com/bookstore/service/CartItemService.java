package com.bookstore.service;


import java.util.List;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.CartItemDTO;
import com.bookstore.dto.CartItemQtyDTO;
import com.bookstore.dto.DisplayCartItemDTO;
import com.bookstore.entities.Book;
import com.bookstore.entities.CartItem;

public interface CartItemService {

	public ApiResponse addItem(CartItemDTO cartItemDTO);

	public List<DisplayCartItemDTO> getCartItems(Long customerId);

	public ApiResponse updateItemQty(Long cartItemId, CartItemQtyDTO cartItemQtyDTO);

	public ApiResponse deleteItem(Long cartItemId);

	public ApiResponse deleteCart(Long bookId, Long customerId);

	public Boolean isCartExists(Long bookId, Long customerId);

//	public CartItem createCartItem(CartItem cartItem);
//	
//	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws ResourceNotFoundException;
//	
//	public CartItem isCartItemExist(Cart cart, Book book, Long userId);
//	
//	public void removeCartItem(Long userId,Long cartItemId) throws ResourceNotFoundException;
//	
//	public CartItem findCartItemById(Long cartItemId) throws ResourceNotFoundException;


}
