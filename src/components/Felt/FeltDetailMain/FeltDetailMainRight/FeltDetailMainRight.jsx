import React from "react";
import { useState } from "react";

const FeltDetailMainRight = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  return (
    <div className="felt-detail-main-right" onScroll={handleScroll}>
      <h1>Right</h1>
    </div>
  );
};

export default FeltDetailMainRight;
