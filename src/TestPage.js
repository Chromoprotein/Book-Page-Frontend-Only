import React from "react";
import { Link } from "react-router-dom";

function TestPage() {
  return (
    <div>
      <h1>This is the test page</h1>
      <Link to="/">Home</Link>
      <Link to="testpage">TestPage</Link>
    </div>
  );
}

export default TestPage;
