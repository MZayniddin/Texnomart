import paymentData from '../../../dummy-data/payment-type-data.json';
import { v4 as uuidv4 } from 'uuid';
import './FooterBottom.scss';

const FooterBottom = () => {
  return (
    <div className='footer__bottom'>
      <div className="footer__payment">
        <div className="payment-title">Quyidagi to'lovlarni qabul qilamiz</div>
        <ul className="payment-wrap">
        {
          paymentData.map(imgLink => 
          <li className='payment-link' key={uuidv4()}>
            <img className='payment-img' src={imgLink} alt="" />
          </li>  
          )
        }
        </ul>
      </div>
      <div className='footer__alltext'>
        2016-2022 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal qiladi
      </div>
    </div>
  )
}

export default FooterBottom