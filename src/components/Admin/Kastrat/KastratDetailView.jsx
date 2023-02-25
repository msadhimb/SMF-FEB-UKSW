import React, { useEffect, useState } from "react";
import KastratDetailMainView from "./KastratDetailMain/KastratDetailMainView";
import KastratDetailNav from "./KastratDetailNav/KastratDetailNav";

import "./Kastrat.css";
import KastratFooter from "./KastratFooter/KastratFooter";
import { useNavigate } from "react-router-dom";

const KastratDetailView = () => {
  const nav = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/kastrat");
    }
  }, []);
  return (
    <React.Fragment>
      <KastratDetailNav />
      <KastratDetailMainView />
      <KastratFooter />
    </React.Fragment>
  );
};

export default KastratDetailView;
