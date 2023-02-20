import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from './redux/actions/productAction';
const ProductListing = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const fetchProducts = async () => {
    
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch( (err) => {
        console.log("err",err);
      })

      dispatch(setProducts(response.data));
      console.log(response.data);
    };

  useEffect( () => {
    fetchProducts();
  },[]);

  console.log("products" ,products);
  return (
    <div className='ui grid container'>
     <ProductComponent/>
    </div>
  );
};

export default ProductListing
