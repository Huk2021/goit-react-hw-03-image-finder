import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      Loading
      <Bars
        heigth="100"
        width="100"
        color="#3f51b5"
        arialLabel="loading-indicator"
      />
    </div>
  );
};

export default Loader;
