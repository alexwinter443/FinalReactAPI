import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ProductRow from "./ProductRow";
/*
*   Alex Vergara
*   Milestone 5
*   CST-391
*   12/12/2021
*/ 
const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      // get request
      .get("http://localhost:3000/products/products")
      .then(({ data }) => {
        setProducts(data);
      })
  }, []);
  
  const DataTable = () => {
    return products.map((res, i) => {
      return <ProductRow obj={res} key={i} />;
    });
  };
  
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>CRUD</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default ProductList;