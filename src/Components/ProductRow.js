import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
/*
*   Alex Vergara
*   Milestone 5
*   CST-391
*   12/12/2021
*/
const ProductRow = (props) => {
  // values
  const { ID, name, description } = props.obj;
  
  const deleteProduct = () => {
    axios
      // delete request
      .delete("http://localhost:3000/products/product/" + ID)
      .then((res) => {
        // successful request
        if (res.status === 200) {
          alert("Product deleted");
        }
      })
  };
  
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <Link className="edit-link" to={"/edit-product/" + ID}>Edit</Link>
        <Button onClick={deleteProduct} variant="danger">Delete</Button>
      </td>
    </tr>
  );
};
  
export default ProductRow;