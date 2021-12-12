import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
/*
*   Alex Vergara
*   Milestone 5
*   CST-391
*   12/12/2021
*/
const EditProduct = (props) => {

  const [formValues, setFormValues] = useState({
    // default values for form
    name: "",
    description: "",
  });
    
  // onSubmit handler
  const onSubmit = (productObject) => {
    axios
       // update Request
      .put("http://localhost:3000/products/product/" + props.match.params.id + "/" + productObject.name + "/" + productObject.description, productObject)
      .then((res) => {
        if (res.status === 200) {
          // successful product update
          alert("Product updated");
          props.history.push("/product-list");
        }
      })
  };
  
  // initialize student form
  useEffect(() => {
    axios
      .get(
        // get one product that matches the product
        "http://localhost:3000/products/product/" 
        + props.match.params.id
      )
      .then((res) => {
        const { name, description } = res.data;
        setFormValues({ name, description });
      })
  }, []);
  
  // Return student form
  return (
    <ProductForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Update Product
    </ProductForm>
  );
};
  
// Export EditProduct Component
export default EditProduct;