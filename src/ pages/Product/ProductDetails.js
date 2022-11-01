import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./ProductDetails.css";

function ProductDetails() {
  let { productID } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + productID).then((res) => {
      setDetails(res.data);
    });
  }, [productID]);

  return (
    <Fragment>
      <Header />
      <Container>
        {details && (
          <Row className="my-5">
            <Col md={6} sm={12}>
              <div className="img-container">
                <Image className="single-img" src={details.image} />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="px-4">
                <h2>{details.title}</h2>
                <h4 className="py-2">
                  Category:{" "}
                  <Link
                    to={`/categories/${details.category}`}
                    className="text-capitalize text-decoration-none"
                  >
                    {details.category}
                  </Link>
                </h4>
                <h4 className="py-2">Price: ${details.price}</h4>
                <p>{details.description}</p>
                <div className="">
                  <Button variant="dark" className="me-2">
                    Buy Now
                  </Button>
                  <Button variant="secondary" className="ms-2">
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
}

export default ProductDetails;
