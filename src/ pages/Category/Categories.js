import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  });

  return (
    <Fragment>
      <Header />
      <Container className="my-4">
        <h4 className="mb-3">All Categories</h4>
        <Row>
          {categories &&
            categories.map((category) => {
              return (
                <Col sm={2}>
                  <NavLink
                    to={`/categories/${category}`}
                    className="text-capitalize text-decoration-none text-dark"
                  >
                    {category}
                  </NavLink>
                </Col>
              );
            })}
        </Row>
        <Outlet />
      </Container>
    </Fragment>
  );
}

export default Categories;
