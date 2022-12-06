import "./Header.scss";

// components
import HeaderTop from "./header_top/HeaderTop";
import HeaderCenter from "./header_center/HeaderCenter";
import HeaderBottom from "./header_bottom/HeaderBottom";
import HeaderApp from "./header_app/HeaderApp";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <div className="container">
        <HeaderCenter />
        <HeaderBottom />
      </div>
      <HeaderApp/>
    </header>
  );
};

export default Header;
