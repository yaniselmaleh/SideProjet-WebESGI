import React from 'react';
import { Link } from "react-router-dom";

function Test() {
  return (
    <>
        <p>Test page</p>
        <Link to="/" title="home">Go to Home</Link>
    </>
  );
}

export default Test;