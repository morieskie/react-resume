import React from "react";
import FooterComponent from "./FooterComponent";
import LoadingComponent from "./LoadingComponent";
import { useSelector } from "react-redux";

const PageComponent = ({ children }: any) => {
  const isLoading = useSelector((state: { loader: { isLoading: boolean } }) => {
    return state.loader.isLoading;
  });

  return (
    <>
      {isLoading !== false && <LoadingComponent />}
      <div id="page" className="page-layout">
        {children}
      </div>
      <FooterComponent />
    </>
  );
};

export default PageComponent;
