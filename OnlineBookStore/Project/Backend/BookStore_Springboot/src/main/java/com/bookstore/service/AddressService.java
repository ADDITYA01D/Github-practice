package com.bookstore.service;

import java.util.List;

import com.bookstore.dto.AddressDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.DetachedAddressDTO;

public interface AddressService 
{
	public ApiResponse addAddress(Long userId, AddressDTO addressDTO);
//	public List<AddressDTO> getAddress(Long userId);
	public List<DetachedAddressDTO> getAddress(Long userId);
	public ApiResponse deleteAddress(Long addressId);
	public ApiResponse updateAddress(Long addressId, DetachedAddressDTO detachedAddressDTO);
	public DetachedAddressDTO getAddressById(Long addressId, Long customerId);
	public DetachedAddressDTO getDefaultAddress(Long customerId);
}
