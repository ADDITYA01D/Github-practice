package com.bookstore.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookstore.entities.Admin;
import com.bookstore.entities.Customer;

public interface AdminRepository extends JpaRepository<Admin, Long>{
	Optional<Customer> findByEmail(String email);
	boolean existsByEmail(String email);
}
