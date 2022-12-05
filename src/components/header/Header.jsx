import React from "react";
import "./Header.scss";

// components
import HeaderTop from "./header_top/HeaderTop";
import HeaderCenter from "./header_center/HeaderCenter";
import HeaderBottom from "./header_bottom/HeaderBottom";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <div className="container">
        <HeaderCenter />
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
