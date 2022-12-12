//components
import BasketModal from "./components/basket-modal/BasketModal";
import Header from "./components/header/Header";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import Routes from "./routes/index";
function App() {
  return (
    <div>
      <Header/>
      <BasketModal/>
      <Routes/>
      <MobileMenu/>
    </div>
  );
}

export default App;
