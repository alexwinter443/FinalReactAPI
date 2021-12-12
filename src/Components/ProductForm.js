import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import * as Yup from "yup";
/*
*   Alex Vergara
*   Milestone 5
*   CST-391
*   12/12/2021
*/  
const ProductForm = (props) => {

  // yup is a schema builder for value parsing and validation
  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    description: Yup.string()
      .required("Required"),
  });

  return (
    <div>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field name="name" type="text" placeholder="product name" className="form-control" />
          </FormGroup>

          <FormGroup>
            <Field name="description" type="text" placeholder="product description" className="form-control" />
          </FormGroup>
          
          <Button variant="success" type="submit">{props.children}</Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default ProductForm;