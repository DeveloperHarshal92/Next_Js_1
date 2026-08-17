import MainNavs from "@/components/MainNavs";
import React from "react";

const layout = ({children}) => {
  return (
    <>
      <MainNavs />
      {children}
    </>
  );
};

export default layout;
