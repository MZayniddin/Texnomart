//components
import { useState } from "react";
import BasketModal from "./components/basket-modal/BasketModal";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import MobileMenu from "./components/mobile-menu/MobileMenu";
import Routes from "./routes/index";
import MobileSidebar from "./components/mobile-sidebar/MobileSidebar";
function App() {
  const [isBasketActive, setBasketActive] = useState(false);
  const [isMobSideberActive, setMobSidebarActive] = useState(false);
  return (
    <div>
      <Header setMobSidebarActive={setMobSidebarActive} setBasketActive={setBasketActive} />
      <MobileSidebar setMobSidebarActive={setMobSidebarActive} isMobSideberActive={isMobSideberActive}/>
      <BasketModal setBasketActive={setBasketActive} isBasketActive={isBasketActive}/>
      <Routes setMobSidebarActive={setMobSidebarActive}/>
      <MobileMenu setMobSidebarActive={setMobSidebarActive}/>
      <Footer/>
    </div>
  );
}


export default App;
