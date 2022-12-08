import { useEffect, useState } from "react"
import CarouselProducts from "../carousel-products/CarouselProducts";
import HomeProducts from "../home-products/HomeProducts";


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
    </div>
  )
}

export default Main