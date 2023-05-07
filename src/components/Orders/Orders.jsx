import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
const Orders = () =>{
    const products =useLoaderData();
    return (
    <div className="shop-container">
        <div className="products-container">
            <h3>Orders page:{products.length}</h3>
        </div>
        <div className="cart-container">
            <Cart cart={[]}></Cart>
        </div>
    </div>
    );
}
export default Orders;