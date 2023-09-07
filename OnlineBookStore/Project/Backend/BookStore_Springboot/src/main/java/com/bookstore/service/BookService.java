package com.bookstore.service;



import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

import com.bookstore.dto.AddBookDTO;
import com.bookstore.dto.AdminBookDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.BookDTO;
import com.bookstore.dto.GetBookDTO;
import com.bookstore.dto.BookDTO;
import com.bookstore.dto.OnlyBookDTO;
import com.bookstore.entities.Book;

public interface BookService {

	ApiResponse addBook(AddBookDTO bookDTO);

	ApiResponse updateBook(OnlyBookDTO detachedBook);

	List<OnlyBookDTO> getAllBooks();

	BookDTO getBook(Long id);
	
	Book findBookById(Long id);
	
	List<GetBookDTO> getBooks();

	ApiResponse deleteBook(Long id);

	ApiResponse updateBookById(Long bookId,AdminBookDTO adminBookDTO);


}

