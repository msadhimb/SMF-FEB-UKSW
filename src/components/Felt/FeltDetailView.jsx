import React, { useEffect, useState } from "react";
import FeltDetailMainView from "./FeltDetailMain/FeltDetailMainView";
import FeltDetailNav from "./FeltDetailNav/FeltDetailNav";

import "./Felt.css";
import FeltFooter from "./FeltFooter/FeltFooter";

const FeltDetailView = () => {
  return (
    <React.Fragment>
      <FeltDetailNav />
      <FeltDetailMainView />
      <FeltFooter />
    </React.Fragment>
  );
};

export default FeltDetailView;
