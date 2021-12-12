import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import ProductList from "./Components/ProductList";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import EditProduct from "./Components/EditProduct";
import CreateProduct from "./Components/CreateProduct";
/*
*   Alex Vergara
*   Milestone 5
*   CST-391
*   12/12/2021
*/
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-product"} className="nav-link" />
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-product"} className="nav-link">Create Product</Link>
                </Nav>
  
                <Nav>
                  <Link to={"/product-list"} className="nav-link">List all Products</Link>
                </Nav>

              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <Switch>
                  <Route exact path="/" component={CreateProduct} />
                  <Route path="/create-product" component={CreateProduct} />
                  <Route path="/edit-product/:id" component={EditProduct} />
                  <Route path="/product-list" component={ProductList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;