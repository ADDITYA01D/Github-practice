import axios from "axios";
import {createUrl,log} from '../utils/utils';

export async function update(bookId, books, token)
{
    console.log("bookId::"+bookId)

    const body={
        isbn:books.isbn,    // the keys here should match with the DTO in the backend 
        title:books.title,
        description:books.description,
        price:books.price,
        discountedPrice:books.discountedPrice,
        quantity:books.quantity
    }
    console.log("token="+token)

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }

const url = createUrl('/book/update/'+bookId);
try{
    //console.log("QUANTITY::"+body.quantity)
    const response =await axios.put(url,body,header)
    console.log(response.data);
    console.log("in cart item update AXIOS");
    return response;
}
catch(ex){
    log(ex);
    return ex;
}
}


export async function addBook(books, token)
{
 

    const body={
        isbn:books.isbn,    // the keys here should match with the DTO in the backend 
        title:books.title,
        description:books.description,
        price:books.price,
        discountedPrice:books.discountedPrice,
        quantity:books.quantity,
        category:books.category,
        authorId:books.authorId,
        imagePath:books.imagePath
    }
    console.log("token="+token)

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }

const url = createUrl('/book/add');
try{
    //console.log("QUANTITY::"+body.quantity)
    const response =await axios.post(url,body,header)
    console.log(response.data);
    
    return response;
}
catch(ex){
    log(ex);
    return ex;
}
}

export async function deleteBook(bookId,token)
{
    console.log("bookId::"+bookId)
    console.log("token="+token)

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }

const url = createUrl('/book/delete/'+bookId);
try{
    
    const response =await axios.delete(url,header)
    // console.log(response);
    console.log("in cart item update AXIOS");
    return response;
}
catch(ex){
    log(ex);
    return ex;
}
}