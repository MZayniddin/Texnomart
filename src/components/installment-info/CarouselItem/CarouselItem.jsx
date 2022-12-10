import { Link } from "react-router-dom";
import './CarouselItem.scss'

const CarouselItem = ({img, title, text}) => {
  return (
    <Link to="/">
      <div className="installment-info__img">
        <img src={img} alt="" />
      </div>
      <h3 className="installment-info__title">{title}</h3>
      <div className="installment-info__desc">{text}</div>
    </Link>
  )
}

export default CarouselItem