package com.bookstore.service;

import java.util.List;

import com.bookstore.dto.AddAuthorDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.AuthorDTO;
import com.bookstore.dto.OnlyAuthorDTO;
import com.bookstore.entities.Author;

public interface AuthorService {
	ApiResponse addAuthor(AddAuthorDTO authorDTO);
	List<OnlyAuthorDTO> getAllAuthors();
	ApiResponse deleteAuthor(Long id);
	AuthorDTO getAuthor(Long id);	
	ApiResponse updateAuthor(OnlyAuthorDTO detachedAuthor);
}
