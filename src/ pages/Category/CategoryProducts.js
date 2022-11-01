import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

function CategoryProducts() {
  let { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  console.log(categoryName);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/" + categoryName)
      .then((res) => {
        console.log(res);
        setCategoryProducts(res.data);
      });
  }, [categoryName]);

  return (
    <div className="my-4">
      <h4 className="mb-4">
        Produdcts from - <span className="text-capitalize">{categoryName}</span>
      </h4>
      <Row>
        {categoryProducts &&
          categoryProducts.map((product) => {
            return (
              <Col
                xs={12}
                sm={6}
                md={2}
                lg={2}
                className="mb-4"
                key={product.id}
              >
                <ProductCard product={product} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default CategoryProducts;
