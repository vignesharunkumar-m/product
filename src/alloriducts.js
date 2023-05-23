import { useSelector,useDispatch} from "react-redux";
 import React, { useEffect, useState } from "react";
import {message} from "./actions/actiontypes"
import axios from "axios";


 const Allproducts = () => {
    const list_of_products = useSelector(state => state)

    const dispatch = useDispatch()
    const baseURL ="http://cbe.themaestro.in/ksnm/webservice/allproductlistforsearch";
    
    // console.log(list_of_products,'listofproducts');
    // var arr = ["vignesh"]
    
    const handleSubmit = () =>{
        // dispatch(message(arr,"parent"))
        axios.post(baseURL)
        .then((res) => {
            dispatch(message(res.data.products_list,"parent"))
        })
        console.log(list_of_products,'listofproducts');
    }

    // useEffect(() => {
    //     axios.post(baseURL)
    //     .then((res) => {
    //         dispatch(message(res.data.products_list,"parent"))
    //     })
    //     console.log(list_of_products,'listofproducts');
    // })

    return (
        <div>
            <div>{list_of_products.datas.name}</div>
            {list_of_products.datas.map((msg,i) => {
                return (
                    <div key={i}>{msg.name}</div>
                    
                )
            })}
            <button onClick={handleSubmit}>get</button>
        </div>
    )
}


export default Allproducts