import axios from "axios";
import { createUrl, log } from "../utils/utils";

export async function getAddressList(id, token) {
console.log(token)
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    };
    
    const url = createUrl(`/address/customer/${id}`);
    try {
        const response = await axios.get( 
            url,
            header
            );
        return response;

    } catch (ex) {
        log(ex);
        return ex
    }
}

export async function addAddress(customerId, address, token) {
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    };
    const url = createUrl(`/address/addtocustomer/${customerId}`);
    try {
        const response = await axios.post( 
            url, address,
            header
            );
        return response;

    } catch (ex) {
        log(ex);
        return ex
    }
}
//address/addressid/{addressId}
export async function deleteAddress(addressId, token) {
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    };
    const url = createUrl(`/address/addressid/${addressId}`);
    try {
        const response = await axios.delete( 
            url,
            header
            );
        return response;

    } catch (ex) {
        log(ex);
        return ex
    }
}

export async function getAddressById(addressId,customerId, token) {
    console.log(token)
        const header = {
            headers: { 
                "content-type" : "application/json",
                Authorization: `Bearer ${token}`,
            }
        };
        
        const url = createUrl(`/address/address/customer/${addressId}/${customerId}`);
        try {
            const response = await axios.get( 
                url,
                header
                );
            return response;
    
        } catch (ex) {
            log(ex);
            return ex
        }
    }


export async function updateAddress(customerId, address, token) {
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    };

    const url = createUrl(`/address/customer/${customerId}`);
    try {
        const response = await axios.put( 
            url, address,
            header
            );
        return response;

    } catch (ex) {
        log(ex);
        return ex
    }
}

export async function getDefaultAddress(customerId, token) {
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    };

    const url = createUrl(`/address/default/${customerId}`);
    try {
        const response = await axios.get(url,header);
        return response;
    } catch(ex) {
        log(ex);
        return ex;
    }
} 
        


