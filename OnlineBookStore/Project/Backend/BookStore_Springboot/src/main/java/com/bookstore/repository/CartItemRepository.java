package com.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bookstore.entities.Book;
import com.bookstore.entities.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

//	@Query("SELECT ci From CartItem ci Where ci.cart=:cart And ci.book=:book And ci.userId=:userId")
//	public CartItem isCartItemExist(@Param("cart")Cart cart, @Param("book")Book book, @Param("userId")Long userId);
	
	@Query("SELECT c from CartItem c where c.book.id=:bookId And c.customer.id=:customerId")
	public CartItem findCartItemByBookIdAndCustomerId(@Param("bookId")Long bookId, @Param("customerId")Long customerId);
	
}
