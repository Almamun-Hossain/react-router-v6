import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function PageNotFound() {
  return (
    <Fragment>
      <Header />
      <Container>
        <div className="m-auto w-100 text-center my-5">
          <h1>Page Not Found</h1>
          <Link to="/">Go back to Home Page</Link>
        </div>
      </Container>
    </Fragment>
  );
}

export default PageNotFound;
