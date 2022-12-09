import { useEffect, useState } from "react"

//components
import AppAds from "../app-ads/AppAds";
import CarouselProducts from "../carousel-products/CarouselProducts";
import HomeProducts from "../home-products/HomeProducts";
import InstallmentInfo from "../installment-info/InstallmentInfo";


const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch(" https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error(error))
  },[])
  return (
    <div className='main'>
      <HomeProducts title="Zo'r narx" seemore={true}>
        <CarouselProducts productData={products.slice(0, 20)} status="Zo'r narx" id={1}/>
      </HomeProducts>
      <HomeProducts title="Yangi maxsulotlar">
        <CarouselProducts productData={products.slice(20, 40)} id={2}/>
      </HomeProducts>
      <HomeProducts title="Xit savdo" seemore={true}>
        <CarouselProducts productData={products.slice(40, 60)} status="Xit savdo" id={3}/>
      </HomeProducts>
      <HomeProducts title="To'plamlar" seemore={true}>
        <CarouselProducts productData={products.slice(60, 80)} status="Tavsiya etamiz" id={4}/>
      </HomeProducts>
      <AppAds/>
      <InstallmentInfo/>
    </div>
  )
}

export default Main