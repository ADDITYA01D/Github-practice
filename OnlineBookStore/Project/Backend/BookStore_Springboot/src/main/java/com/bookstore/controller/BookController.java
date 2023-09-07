package com.bookstore.controller;

import java.util.List;

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

import com.bookstore.dto.AddBookDTO;
import com.bookstore.dto.AdminBookDTO;
import com.bookstore.dto.GetBookDTO;
import com.bookstore.dto.OnlyBookDTO;
import com.bookstore.service.BookService;

@RestController
@RequestMapping("/book")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

	@Autowired
	private BookService bookService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addBook(@RequestBody AddBookDTO bookDTO) {
		return ResponseEntity.status(HttpStatus.OK).body(bookService.addBook(bookDTO));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateBook(@RequestBody OnlyBookDTO detachedBook) {
		return ResponseEntity.status(HttpStatus.OK).body(bookService.updateBook(detachedBook));
	}
	
	@PutMapping("/update/{bookId}")
	public ResponseEntity<?> updateBookById(@PathVariable Long bookId ,@RequestBody AdminBookDTO adminBookDTO) {
		return ResponseEntity.status(HttpStatus.OK).body(bookService.updateBookById(bookId,adminBookDTO));
	}
	
	
	@GetMapping("/getall")
	public List<OnlyBookDTO> getAllBook() {
		return bookService.getAllBooks();
	}
	
	@GetMapping("/getbooks")
	public ResponseEntity<?> getBooks() {
		return ResponseEntity.ok(bookService.getBooks()); //short cut of line 38
		
	}
	
//	@GetMapping("/getbooks")
//	public List<GetBookDTO> getBooks() {
//		return bookService.getBooks();
//		
//	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<?> getBook(@PathVariable Long id) {

		return ResponseEntity.status(HttpStatus.FOUND).body(bookService.getBook(id)); 

	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteBook(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(bookService.deleteBook(id));
	}
	
//	@PutMapping("/update")
//	public ResponseEntity<?> updateBook(@RequestBody OnlyBookDTO detachedBook) {
//		return ResponseEntity.status(HttpStatus.OK).body(bookService.updateBook(detachedBook));
//	}	
//	
	
}
