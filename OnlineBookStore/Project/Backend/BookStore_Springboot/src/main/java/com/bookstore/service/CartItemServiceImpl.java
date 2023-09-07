package com.bookstore.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.CartBookDTO;
import com.bookstore.dto.CartItemDTO;
import com.bookstore.dto.CartItemQtyDTO;
import com.bookstore.dto.DisplayCartItemDTO;
import com.bookstore.entities.Book;
import com.bookstore.entities.CartItem;
import com.bookstore.entities.Customer;
import com.bookstore.repository.BookRepository;
import com.bookstore.repository.CartItemRepository;
import com.bookstore.repository.CustomerRepository;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {
	
	@Autowired
	private CartItemRepository cartItemRepository;
//	@Autowired
//	private CustomerService customerService;
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public ApiResponse addItem(CartItemDTO cartItemDTO) {
		System.out.println(cartItemDTO);
		Customer customer = customerRepository.findById(cartItemDTO.getCustomerId()).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		Book book = bookRepository.findById(cartItemDTO.getBookId()).orElseThrow(() -> new ResourceNotFoundException("invalid book id!"));
		System.out.println("book.getQuantity() = " + book.getQuantity());
		int bookQty = book.getQuantity();
		ApiResponse apiResponse = null;
		if(bookQty > 0) {
			double tPrice = book.getPrice();
			double tDiscPrice = book.getDiscountedPrice();
			CartItem cartItem = new CartItem(book, customer, tPrice, tDiscPrice);
			cartItem.setQuantity(1);
			cartItemRepository.save(cartItem);
			System.out.println("Added success");
//			book.setQuantity(bookQty - 1);
//			bookRepository.save(book);
			System.out.println("book: " + book.getTitle() + " "+ book.getQuantity());
			apiResponse = new ApiResponse("Cart Item ADDED");			
		}
		else {
			apiResponse = new ApiResponse("Book is OUT of STOCK");
		}
		
		return apiResponse;
	}

	@Override
	public List<DisplayCartItemDTO> getCartItems(Long customerId) {
		Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		List<DisplayCartItemDTO> cartItemList = new ArrayList<>();
		customer.getCartItems().forEach(i -> cartItemList.add(new DisplayCartItemDTO(i.getId(), new CartBookDTO(i.getBook().getId(),i.getBook().getTitle(),i.getBook().getAuthor().getName(),i.getBook().getImagePath(), i.getBook().getDiscountedPrice(), i.getBook().getQuantity()) , customerId, i.getQuantity(), i.getTotalPrice(), i.getTotalDiscountedPrice())));
		return cartItemList;
	}

	@Override
	public ApiResponse updateItemQty(Long cartItemId, CartItemQtyDTO cartItemQtyDTO) {
		CartItem cartItem = cartItemRepository.findById(cartItemId).orElseThrow(() -> new ResourceNotFoundException("invalid cart item id!"));
		int qty = cartItemQtyDTO.getQuantity();
		
		if(qty == 0) {
			cartItemRepository.delete(cartItem);
		}
		else {
			cartItem.setQuantity(qty);
			cartItem.setTotalPrice(qty*cartItem.getBook().getPrice());
			cartItem.setTotalDiscountedPrice(qty*cartItem.getBook().getDiscountedPrice());
			cartItemRepository.save(cartItem);
		}
		
		ApiResponse apiResponse = new ApiResponse("Cart Item Quantity Updated!!");
		return apiResponse;			
		
	}

	@Override
	public ApiResponse deleteItem(Long cartItemId) {
		CartItem cartItem = cartItemRepository.findById(cartItemId).orElseThrow(() -> new ResourceNotFoundException("invalid cart item id!"));
		cartItemRepository.delete(cartItem);
		ApiResponse apiResponse = new ApiResponse("Cart Item Deleted!!");
		return apiResponse;
	}

	@Override
	public ApiResponse deleteCart(Long bookId, Long customerId) {
		CartItem cartItem = cartItemRepository.findCartItemByBookIdAndCustomerId(bookId, customerId);
		cartItemRepository.delete(cartItem);
		ApiResponse apiResponse = new ApiResponse("Cart Item Deleted!!");
		return apiResponse;
	}

	@Override
	public Boolean isCartExists(Long bookId, Long customerId) {
		Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		List<CartItem> cartItemList = customer.getCartItems();

		for(CartItem i : cartItemList) {
			if(i.getBook().getId() == bookId)
				return true;
		}
		return false;
	}

	
//	@Override
//	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws ResourceNotFoundException {
//		CartItem item = findCartItemById(id);
//		User user = userService.findUserById(item.getUserId());
//		
//		if(user.getId().equals(userId)) {	
//			item.setQuantity(cartItem.getQuantity());
//			item.setPrice(item.getQuantity()*item.getBook().getPrice());
//			item.setDiscountedPrice(item.getQuantity()*item.getBook().getDiscountedPrice());
//			return cartItemRepository.save(item);
//				
//		}
//		else {
//			throw new ResourceNotFoundException("You can't update  another users cart_item");
//		}
//		
//	}
//
//	@Override
//	public CartItem isCartItemExist(Cart cart, Book book, Long userId) {
//		CartItem cartItem=cartItemRepository.isCartItemExist(cart, book, userId);
//		return cartItem;
//	}
//	
//	@Override
//	public void removeCartItem(Long userId,Long cartItemId) throws ResourceNotFoundException{
//		System.out.println("userId- "+userId+" cartItemId "+cartItemId);
//		CartItem cartItem = findCartItemById(cartItemId);
//		User user = userService.findUserById(cartItem.getUserId());
//		User reqUser = userService.findUserById(userId);
//		
//		if(user.getId().equals(reqUser.getId())) {
//			cartItemRepository.deleteById(cartItem.getId());
//		}
//		else {
//			throw new ResourceNotFoundException("you can't remove anothor users item");
//		}
//		
//	}
//
//	@Override
//	public CartItem findCartItemById(Long cartItemId){
//		CartItem cartItem = cartItemRepository.findById(cartItemId).orElseThrow(() -> new ResourceNotFoundException("Something went wrong!"));
//		return cartItem;
//	}


}
