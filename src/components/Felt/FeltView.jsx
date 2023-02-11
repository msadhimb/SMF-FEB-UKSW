import React from "react";
import FeltMain from "./FeltMain/FeltMain";
import FeltNav from "./FeltNav/FeltNav";

import "./Felt.css";
import FeltFooter from "./FeltFooter/FeltFooter";

const FeltView = () => {
  return (
    <React.Fragment>
      <FeltNav />
      <FeltMain />
      <FeltFooter />
    </React.Fragment>
  );
};

export default FeltView;
