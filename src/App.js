//components
import { useState } from "react";
import BasketModal from "./components/basket-modal/BasketModal";
import Header from "./components/header/Header";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import Routes from "./routes/index";
function App() {
  const [isBasketActive, setBasketActive] = useState(false);
  console.log(isBasketActive);
  return (
    <div>
      <Header setBasketActive={setBasketActive} />
      <BasketModal setBasketActive={setBasketActive} isBasketActive={isBasketActive}/>
      <Routes/>
      <MobileMenu/>
    </div>
  );
}


export default App;
