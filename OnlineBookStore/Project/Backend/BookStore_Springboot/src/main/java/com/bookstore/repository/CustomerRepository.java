package com.bookstore.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookstore.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>
{
	//add a finder to get user details by it's email
	Optional<Customer> findByEmail(String email);
	boolean existsByEmail(String email);
}
