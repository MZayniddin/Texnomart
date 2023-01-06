//components
import BannerDesktop from "../../components/banner-desktop/BannerDesktop";
import BannerMobile from "../../components/banner-mobile/BannerMobile";
import BrandsSlider from "../../components/brands-slider/BrandsSlider";
import CatalogSlider from "../../components/catalog-slider/CatalogSlider";
import Main from "../../components/main/Main";

const Home = ({ setMobSidebarActive }) => {
  return (
    <>
      <BannerDesktop />
      <BannerMobile />
      <BrandsSlider />
      <CatalogSlider setMobSidebarActive={setMobSidebarActive} />
      <Main />
    </>
  );
};

export default Home;
