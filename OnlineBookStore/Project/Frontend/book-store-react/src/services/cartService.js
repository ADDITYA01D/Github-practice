import axios from "axios";
import {createUrl,log} from '../utils/utils';


export async function cartExists(bookId,userId,token)
{
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }
    console.log("user:"+userId)
    console.log("book:"+bookId)
    console.log("INSIDE CART EXISTS")
    const url = createUrl('/cart_items/cart_exists/'+bookId+'/'+userId);
    try{
        const response =await axios.get(url,header)
        log("STATUS RESPONSE:"+response.data);
        return response;
    }
    catch(ex){
        log(ex);
        return ex;
    }
}

export async function getItemList(userId,token){

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }
    console.log(userId)
    const url = createUrl('/cart_items/get_cart/'+userId);
    try{
        const response =await axios.get(url,header)
        log(response);
        return response;
    }
    catch(ex){
        log(ex);
        return ex;
    }
}

export async function addCartItem(userId,bookId,token)
{
    console.log("userId::"+userId)
    const body={
        customerId:userId,  // the keys here should match with the DTO in the backend 
        bookId:bookId
    }
    console.log("token="+token)

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }

const url = createUrl('/cart_items/add');
try{
    console.log("userID::"+body.customerId+" bookId::"+body.bookId)
    const response =await axios.post(url,body,header)
    console.log(response);
    console.log("HELLO");
    return response;
}
catch(ex){
    log(ex);
    return ex;
}
}



// export async function updateBookStock(bookId,updatedStock,token)
// {
// const body={
//     bookId:bookId,
//     updatedStock:updatedStock
// }
// const header = {
//     headers: { 
//         "content-type" : "application/json",
//         Authorization: `Bearer ${token}`,
//     }
// }
// const url = createUrl('/book/qty_update');
// try{
//     //console.log("QUANTITY::"+body.quantity)
//     const response =await axios.put(url,body,header)
//     console.log(response);
//     console.log("in cart item update AXIOS");
//     return response;
// }
// catch(ex){
//     log(ex);
//     return ex;
// }
// }

export async function updateCartItemQty(cartId,quantity,token)
{
    console.log("cartId::"+cartId)

    const body={
        quantity:quantity  // the keys here should match with the DTO in the backend 
        
    }
    console.log("token="+token)

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }

const url = createUrl('/cart_items/cart_update/'+cartId);
try{
    //console.log("QUANTITY::"+body.quantity)
    const response =await axios.put(url,body,header)
    console.log(response);
    console.log("in cart item update AXIOS");
    return response;
}
catch(ex){
    log(ex);
    return ex;
}
}

export async function deleteCart(cartId,token)
{
    console.log("cartId::"+cartId)

    
    console.log("token="+token)

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }

const url = createUrl('/cart_items/cart_delete/'+cartId);
try{
    
    const response =await axios.delete(url,header)
    console.log(response);
    console.log("in cart item update AXIOS");
    return response;
}
catch(ex){
    log(ex);
    return ex;
}
}



export async function deleteCrt(bookId,userId,token)
{
    console.log("bookId::"+bookId)

    
    console.log("token="+token)

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }

const url = createUrl('/cart_items/cart_del/'+bookId+'/'+userId);
try{
    
    const response =await axios.delete(url,header)
    console.log(response);
    console.log("in cart item update AXIOS");
    return response;
}
catch(ex){
    log(ex);
    return ex;
}
}





