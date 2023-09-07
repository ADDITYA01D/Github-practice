package com.bookstore.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.AddAuthorDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.AuthorDTO;
import com.bookstore.dto.AuthorBookDTO;
import com.bookstore.dto.OnlyAuthorDTO;
import com.bookstore.entities.Author;
import com.bookstore.repository.AuthorRepository;

@Service
@Transactional
public class AuthorServiceImpl implements AuthorService{
	@Autowired
	private AuthorRepository authorRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	public ApiResponse addAuthor(AddAuthorDTO authorDTO) {
		//below working without using ModelMapper
//		Author author = new Author();
//		author.setName(authorDTO.getName());
//		author.setBio(authorDTO.getBio());
		Author author = mapper.map(authorDTO, Author.class);
		authorRepository.save(author);
		ApiResponse apiResponse = new ApiResponse("Author Successfully Added!!!");
		return apiResponse;
	}
	
	@Override
	public ApiResponse updateAuthor(OnlyAuthorDTO detachedAuthor)
	{
		//below working with mapper
//		Author author=mapper.map(detachedAuthor, Author.class);
//		Author auth = authorRepository.findById(author.getId()).orElseThrow(() -> new ResourceNotFoundException("Something went wrong!"));
//		auth.setName(author.getName());
//		auth.setBio(author.getBio());
//		authorRepository.save(auth);
		Author author = authorRepository.findById(detachedAuthor.getId()).orElseThrow(() -> new ResourceNotFoundException("Something went wrong!"));
		author.setName(detachedAuthor.getName());
		author.setBio(detachedAuthor.getBio());
		authorRepository.save(author);
		return new ApiResponse("Author updated successfully!");
	}

	@Override
	public List<OnlyAuthorDTO> getAllAuthors() {
		List<OnlyAuthorDTO> authorList = new ArrayList<>();
		authorRepository.findAll().forEach(i -> authorList.add(new OnlyAuthorDTO(i.getId(), i.getName(), i.getBio())));
		return authorList;
	}
	@Override
	public AuthorDTO getAuthor(Long id) {
		Author author =  authorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Author id invalid!"));
		AuthorDTO authorDTO = new AuthorDTO(author.getId(),author.getName(),author.getBio(), new ArrayList<AuthorBookDTO>());
		List<AuthorBookDTO> bookDTOList = authorDTO.getBookList();
		author.getBook().forEach(i -> bookDTOList.add(new AuthorBookDTO(i.getId(),i.getTitle())));
		return authorDTO;
	}
	
	

	@Override
	public ApiResponse deleteAuthor(Long id) {
		Author author = authorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!"));
		authorRepository.delete(author);
		return new ApiResponse("Author deleted successfully!");
	}



	
}
