
//components
import BannerDesktop from "../../components/banner-desktop/BannerDesktop"
import BannerMobile from "../../components/banner-mobile/BannerMobile"
import BrandsSlider from "../../components/brands-slider/BrandsSlider"
import CatalogSlider from "../../components/catalog-slider/CatalogSlider"
import Header from "../../components/header/Header"

const Home = () => {
  return (
    <>
      <Header/>
      <BannerDesktop/>
      <BannerMobile/>
      <BrandsSlider/>
      <CatalogSlider/>
    </>
  )
}

export default Home