import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <h3>
        Your Browser is not reloading the web page, it is client side rendering
        of varoius components using React-Router-DOM !
      </h3>
      <br />
      <br />
      <br />
      <button type="button" class="btn btn-outline-info">
        <Link to="/Home">Home</Link>
      </button>
      <br />
      <br />
      <br />
      <button type="button" class="btn btn-outline-info">
        <Link to="/Contact">Contact</Link>
      </button>
      <br />
      <br />
      <br />
      <button type="button" class="btn btn-outline-info">
        <Link to="/Service">Service</Link>
      </button>
      <br />
      <br />
      <br />
    </>
  );
};

export default Nav;
