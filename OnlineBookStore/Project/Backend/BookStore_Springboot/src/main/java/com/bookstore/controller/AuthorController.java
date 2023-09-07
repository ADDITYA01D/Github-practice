package com.bookstore.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.dto.AddAuthorDTO;
import com.bookstore.dto.AuthorDTO;
import com.bookstore.dto.OnlyAuthorDTO;
import com.bookstore.service.AuthorService;

@RestController
@RequestMapping("/author")
public class AuthorController {
	
	@Autowired
	private AuthorService authorService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addAuthor(@RequestBody AddAuthorDTO authorDTO) {
		return ResponseEntity.status(HttpStatus.OK).body(authorService.addAuthor(authorDTO));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateAuthor(@RequestBody OnlyAuthorDTO detachedAuthor) {
		return ResponseEntity.status(HttpStatus.OK).body(authorService.updateAuthor(detachedAuthor));
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAllAuthor() {
		return ResponseEntity.status(HttpStatus.OK).body(authorService.getAllAuthors());
	}
	
	@GetMapping("/get/{id}")
	public AuthorDTO getAuthor(@PathVariable Long id) {
		return authorService.getAuthor(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteAuthor(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.FOUND).body(authorService.deleteAuthor(id));
	}
	
}
