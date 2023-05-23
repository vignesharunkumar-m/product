// ProductList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from './store';
import axios from 'axios';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.post('http://cbe.themaestro.in/ksnm/webservice/allproductlistforsearch');
        const data =  response.data.products_list;
        console.log(data,'data')
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [dispatch]);

  return (
    <div>
      {products.map((product,i) => (
        <div key={i} >
          <h3>{product.name}</h3>
          <img src={product.img_path}></img>
          <div>{product.product_id}</div>
          <div>{product.price}</div>
          <div>{product.product_tags}</div>
          {/* <div dangerouslySetInnerHTML={{ __html: product.innerHTML }}></div> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
