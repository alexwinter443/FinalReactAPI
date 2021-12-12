import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import axios from 'axios';
/*
*   Alex Vergara
*   Milestone 5
*   CST-391
*   12/12/2021
*/
  
//CreateProduct component
const CreateProduct = () => {
  // form values
  const [formValues] = 
    useState({ name: '', description: ''})
  // onSubmit handler
  const onSubmit = productObject => {
    // post request
    axios.post('http://localhost:3000/products/postProduct/' + productObject.name + "/" + productObject.description)
      .then(res => {
        // successful request
        if (res.status === 200)
          alert('Product created')
      })
  }
    
  // Return student form
  return(
    <ProductForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Create Product
    </ProductForm>
  )
}
  
export default CreateProduct