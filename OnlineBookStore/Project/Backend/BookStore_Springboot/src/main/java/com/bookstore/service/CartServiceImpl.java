//package com.bookstore.service;
//
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.bookstore.custom_exceptions.ResourceNotFoundException;
//import com.bookstore.dto.AddItemDTO;
//import com.bookstore.dto.BookDTO;
//import com.bookstore.entities.Book;
//import com.bookstore.entities.Cart;
//import com.bookstore.entities.CartItem;
//import com.bookstore.entities.User;
//import com.bookstore.repository.CartRepository;
//
//@Service
//@Transactional
//public class CartServiceImpl implements CartService{
//
//	@Autowired
//	private CartRepository cartRepository;
//	
//	@Autowired
//	private BookService bookService;
//	
//	@Autowired
//	private CartItemService cartItemService;
//
//	@Override
//	public Cart findUserCart(Long userId) {
//		Cart cart =	cartRepository.findByUserId(userId);
//		double totalPrice = 0;
//		double totalDiscountedPrice = 0;
//		int totalItem = 0;
//		for(CartItem cartsItem : cart.getCartItems()) 
//		{
//			totalPrice+=cartsItem.getPrice();
//			totalDiscountedPrice+=cartsItem.getDiscountedPrice();
//			totalItem+=cartsItem.getQuantity();
//		}
//		
//		cart.setTotalPrice(totalPrice);
//		cart.setTotalDiscountedPrice(totalDiscountedPrice);
//		cart.setTotalItems(totalItem);
//		
//		return cartRepository.save(cart);
//		
//	}
//
//	@Override
//	public String addCartItem(Long userId, AddItemDTO req) throws ResourceNotFoundException {
//	Cart cart = cartRepository.findByUserId(userId);
//	Book book = bookService.findBookById(req.getBookId());
//
//	CartItem isPresent=cartItemService.isCartItemExist(cart, book, userId);
//
//	if(isPresent == null) {
//	CartItem cartItem = new CartItem();
//	cartItem.setBook(book);
//	cartItem.setCart(cart);
//	cartItem.setQuantity(req.getQuantity());
//	cartItem.setUserId(userId);
//
//	// ??????
//	double price = req.getQuantity()*book.getDiscountedPrice();
//	cartItem.setPrice(price);
//
//	CartItem createdCartItem = cartItemService.createCartItem(cartItem);
//	cart.getCartItems().add(createdCartItem);
//	cart.setTotalPrice(createdCartItem.getPrice());
//
//	double totalPrice = 0;
//	double totalDiscountedPrice = 0;
//	int totalItem = 0;
//
//	for(CartItem x:cart.getCartItems())
//	{
//		totalPrice+=x.getPrice();
//		totalDiscountedPrice+=x.getDiscountedPrice();
//		totalItem+=x.getQuantity();
//	}
//	
//	cart.setTotalPrice(totalPrice);
//	cart.setTotalDiscountedPrice(totalDiscountedPrice);
//	cart.setTotalItems(totalItem);  
//	
//	}
//
//	cartRepository.save(cart);
//
//	return "Item Add To Cart";
//	}
//
//	@Override
//	public Cart createCart(User user) {
//		Cart cart = new Cart();
//		cart.setUser(user);
//		Cart createdCart = cartRepository.save(cart);
//		return createdCart;
//	}
//
//	
//	
//}
