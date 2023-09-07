package com.bookstore.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.AddressDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.DetachedAddressDTO;
import com.bookstore.entities.Address;
import com.bookstore.entities.Customer;
import com.bookstore.repository.AddressRepository;
import com.bookstore.repository.CustomerRepository;


@Service
@Transactional
public class AddressServiceImpl implements AddressService {
	
	
	@Autowired
	private AddressRepository addressRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse addAddress(Long customerId, AddressDTO addressDTO) {
		Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		Address address = mapper.map(addressDTO, Address.class);
		address.setCustomer(customer);
		System.out.println(addressDTO);
//		System.out.println(customer.getAddressList().size());
		if(addressDTO.getIsDefault().equals("true") || customer.getAddressList().size() == 0) {
			customer.setDefaultAddress(address);
		}
		addressRepository.save(address);
		ApiResponse apiResponse = new ApiResponse("Address ADDED");
		return apiResponse;
	}

	
	@Override
	public List<DetachedAddressDTO> getAddress(Long userId) {
		Customer customer = customerRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		List<DetachedAddressDTO> addressList = new ArrayList<>();
		if(customer.getAddressList().size() == 0) {
			return addressList;
		} else {
			
			Long defaultId =  customer.getDefaultAddress().getId();
			customer.getAddressList().forEach(i -> addressList.add(mapper.map(i, DetachedAddressDTO.class)));
			for(int i=0; i<addressList.size(); i++ ) {
				if(addressList.get(i).getId() == defaultId) {
					addressList.get(i).setIsDefault("true");
				}
			}
			return addressList;
		}
	}

//	@Override
//	public ApiResponse deleteAddress(Long userId, Long addressId) {
//		Customer user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
//		List<Address> addressList = user.getAddressList();
//		for(int i = 0; i < addressList.size(); i++) {
//			if(addressList.get(i).getId() == Integer.parseInt(Long.toString(addressId)))
//				addressList.remove(i);
//		}
//		return new ApiResponse("Address "+addressId+" Deleted Successfully for userId " + userId );
//	}
	
	@Override
	public ApiResponse updateAddress(Long customerId, DetachedAddressDTO detachedAddressDTO) {
		Address address = addressRepository.findById(detachedAddressDTO.getId()).orElseThrow(() -> new ResourceNotFoundException("inconsistent data error"));
		Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		address.setCity(detachedAddressDTO.getCity());
		address.setLandmark(detachedAddressDTO.getLandmark());
		address.setState(detachedAddressDTO.getState());
		address.setStreet(detachedAddressDTO.getStreet());
		address.setZipcode(detachedAddressDTO.getZipcode());
		address.setHouseInfo(detachedAddressDTO.getHouseInfo());
		address.setMobile(detachedAddressDTO.getMobile());
		address.setFullName(detachedAddressDTO.getFullName());
		if(detachedAddressDTO.getIsDefault().equals("true")) {
			customer.setDefaultAddress(address);
		}
		return new ApiResponse("Address "+detachedAddressDTO.getId()+" Updated Successfully!");
	}


	@Override
	public ApiResponse deleteAddress(Long addressId) {
		Address address = addressRepository.findById(addressId).orElseThrow(() -> new ResourceNotFoundException("inconsistent data error"));
		addressRepository.delete(address);
		return new ApiResponse("Address "+addressId+" Deleted Successfully");
	}


	@Override
	public DetachedAddressDTO getAddressById(Long addressId, Long customerId) {
		Address address = addressRepository.findById(addressId).orElseThrow(() -> new ResourceNotFoundException("inconsistent data error"));
		DetachedAddressDTO detachedAddress = mapper.map(address, DetachedAddressDTO.class);
		Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		if(customer.getDefaultAddress().getId() == detachedAddress.getId()) {
			detachedAddress.setIsDefault("true");
		}
		return detachedAddress;
	}

	@Override
	public DetachedAddressDTO getDefaultAddress(Long customerId) {
		Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		Address defaultAddress = customer.getDefaultAddress();
		if(defaultAddress == null) {
			return null;
		}
		DetachedAddressDTO defAdr = mapper.map(defaultAddress, DetachedAddressDTO.class);
		defAdr.setIsDefault("true");
		return defAdr;
	}
}
