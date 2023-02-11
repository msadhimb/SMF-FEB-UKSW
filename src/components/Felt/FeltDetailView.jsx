import React from "react";
import FeltDetailMainView from "./FeltDetailMain/FeltDetailMainView";
import FeltDetailNav from "./FeltDetailNav/FeltDetailNav";

import "./Felt.css";

const FeltDetailView = () => {
  return (
    <React.Fragment>
      <FeltDetailNav />
      <FeltDetailMainView />
    </React.Fragment>
  );
};

export default FeltDetailView;
