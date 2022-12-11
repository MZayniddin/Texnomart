//components
import Header from "./components/header/Header";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import Routes from "./routes/index";
function App() {
  return (
    <div>
      <Header/>
      <Routes/>
      <MobileMenu/>
    </div>
  );
}

export default App;
