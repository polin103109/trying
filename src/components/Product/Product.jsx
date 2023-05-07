import React from "react";
import './Product.css';
const Product = (props) =>{
    const {img,name,price,seller,ratings}=props.product;
    const handleAddToCart =props.handleAddToCart;


    return (
        <div className='product'>
        <img src={img} alt="" />
       <div className='product-info'>
       <h6 className='product-name'>{name}</h6>
       <p>Price : ${price}</p>
       <p>Menufacturer : {seller}</p>
       <p>Rating : {ratings} Stars</p>
       </div>
       <button  onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
        Add To Cart
        
        </button>
        </div>
    );
};
   
export default Product;