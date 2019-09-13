import React from "react";
import Loader from "react-loader-spinner";

const SpinLoader = () => {
  return (
    <Loader
      type="TailSpin"
      color="black"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default SpinLoader;
