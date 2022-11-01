import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=12").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <Container>
        <div className="my-4">
          <Row>
            {products &&
              products.map((p) => {
                return (
                  <Col xs={12} sm={6} md={2} lg={2} className="mb-4" key={p.id}>
                    <ProductCard product={p} />
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default Products;
