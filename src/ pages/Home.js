import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Container className="py-4">
        <div
          style={{
            height: "450px",
            background: "url(../img/react-router-dom-banner.webp)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <h1>Welcome to react router dom tutorial</h1>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. Let us create a simple application to React to
          understand how the React Router works. The application will contain
          three components: home component, about a component, and contact
          component. We will use React Router to navigate between these
          components.
        </p>
      </Container>
    </Fragment>
  );
};

export default Home;
