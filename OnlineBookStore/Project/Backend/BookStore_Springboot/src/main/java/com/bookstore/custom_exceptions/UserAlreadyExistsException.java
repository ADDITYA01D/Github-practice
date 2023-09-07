package com.bookstore.custom_exceptions;

@SuppressWarnings("serial")
public class UserAlreadyExistsException extends RuntimeException {
	public UserAlreadyExistsException(String mesg) {
		super(mesg);
	}
}
