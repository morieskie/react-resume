import React from "react";

const MainContentComponent = ({ children }: any) => {
  return (
    <div id="main" className="site-main">
      <div className="pt-wrapper">
        <div className="subpages" style={{ paddingTop: "100px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainContentComponent;
