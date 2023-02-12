import React, { useEffect, useState } from "react";
import KastratDetailMainView from "./KastratDetailMain/KastratDetailMainView";
import KastratDetailNav from "./KastratDetailNav/KastratDetailNav";

import "./Kastrat.css";
import KastratFooter from "./KastratFooter/KastratFooter";

const KastratDetailView = () => {
  return (
    <React.Fragment>
      <KastratDetailNav />
      <KastratDetailMainView />
      <KastratFooter />
    </React.Fragment>
  );
};

export default KastratDetailView;
