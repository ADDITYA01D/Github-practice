import { Link } from 'react-router-dom';
import '../styles/cart.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState,useEffect  } from 'react';
import {getItemList,updateCartItemQty,deleteCart} from '../services/cartService';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

function Cart() 
{


    const token = useSelector((state) => state.auth.token);
    const userId = useSelector((state)=> state.user.id);
    
    
    const [items,setItems] = useState([]);

    
    
    // const [quantity, setQuantity] = useState(items.quantity);

    // const increment = () => {
    //     setQuantity(quantity + 1);
    // };

    // const decrement = () => {
    //     if (quantity > 1) {
    //     setQuantity(quantity - 1);
    //     }
    // };

    useEffect(()=>{
        selectItems();
        
    },[])
    
    const selectItems = async () =>
{
    const response=await getItemList(userId,token)
    if(response['status']===200){
        setItems(response.data)
        console.log(response.data)
        console.log("here")
    }
    else{
        toast.error("UNABLE TO LOAD DATA");
    }
}
console.log(items);

console.log(items[2]);



const updateQtyIncr = async (cartId,quantity,bookStock) =>
{
    console.log("BOOKSTOCK "+bookStock)
    console.log(cartId)
    console.log(quantity)

    var qty=quantity+1;
    if(qty <= bookStock) {
        const response=await updateCartItemQty(cartId,qty,token)
        if(response['status']===200){
            //setItems(response.data)
            console.log(response.data)
            console.log("cart update")
    
            //selectItems();
            console.log("IN UPDATE INCREMENT")
        }
        else{
            toast.error("UNABLE TO Update Cart");
        }

    } else {
        toast.error("")
    }

}

const updateQtyDecr = async (cartId,quantity,bookStock) =>
{
    
    console.log(cartId)
    console.log(quantity)
    var qty=quantity-1;
    const response=await updateCartItemQty(cartId,qty,token)
    if(response['status']===200){
        setItems(response.data)
        console.log(response.data)
        console.log("cart update")

        //selectItems();
        console.log("IN UPDATE INCREMENT")
    }
    else{
        toast.error("UNABLE TO Update Cart");
    }

}

const deleteCartItem = async (cartId)=>
{
    const response=await deleteCart(cartId,token)
    if(response['status']===200){
        setItems(response.data)
        console.log(response.data)
        console.log("cart Deleted")

        //selectItems();
        toast.info("CART ITEM DELETED");
    }
    else{
        toast.error("UNABLE TO DELETE");
    }
}

    return (<>
        <br></br>
        <br></br>
        <br></br>

        <div className="container bootstrap snippets bootdey" style={{paddingLeft:"260px", paddingBottom:"20px", boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
            <div className="col-md-9 col-sm-8 content">
                <div className="row">
                    <div className="col-md-12">
                        <ol className="breadcrumb">
                            {/* <li><Link to={'/'}>Home</Link></li> */}
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-info shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="panel-heading">
                                <h3>
                                    <img className="img-circle img-thumbnail" style={{height:"100px",width:"100px",border:"none"}} src="https://cdn-icons-png.flaticon.com/512/5544/5544117.png" />
                                    &nbsp;&nbsp;&nbsp; MY CART
                                </h3>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Description</th>
                                                <th>Qty</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                                {
                                            items.map((item)=>
                                            {
                                                
                                                return(
                                                    <tr>
                                                    <td><img src={item.book.imagePath} className="img-cart" /></td>
                                                    <td><strong>{item.book.title}</strong><p>By: {item.book.authorName}</p></td>
                                                    <td>
    
    
    
                                                        <form className="form-inline">
                                                            <input className="form-control" type="number" max={item.book.quantity} value={item.quantity} ></input>
    
                                                           

                                                            <button style={{border : 'none', backgroundColor : 'white'}}  id={item.cartItemId} onClick={()=>{updateQtyIncr(item.cartItemId,item.quantity,item.book.quantity)}}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="green" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>                                                                                                      
                                                            </button>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
                                                            <button style={{border : 'none', backgroundColor : 'white'}} id={item.cartItemId} onClick={()=>{updateQtyDecr(item.cartItemId,item.quantity)}}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="red" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>
</svg>
                                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    
                                                            
                                                            <button style={{border : 'none', backgroundColor : 'white'}} id={item.cartItemId} onClick={()=>{deleteCartItem(item.cartItemId)}}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
                                                            </button>
                                                        </form>
                                                    </td>
                                                    <td>₹{item.book.discountedPrice}</td>
                                                    <td>₹{item.totalDiscountedPrice}</td>
                                                </tr>
    
    
                                                );
                                                
                                            }
                                            
                                            )
                                            
                                            
                                        }
                                       


                                            {/* <tr>
                                                <td colspan="6">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" className="text-right">Total Product</td>
                                                <td>$86.00</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" className="text-right">Total Shipping</td>
                                                <td>$2.00</td>
                                            </tr> */}
                                            <br/>
                                            <br/>
                                            <tr>
                                                <td colspan="4" className="text-right"><strong>Total</strong></td>
                                                <td>{items.reduce((acc, item) => acc +item.totalDiscountedPrice, 0)}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <Link to={'/'} className="btn btn-success"><span className="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue Shopping</Link>
                        <Link to={'/placeOrder'} className="btn btn-primary pull-right">Place Order<span className="glyphicon glyphicon-chevron-right"></span></Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Cart;

