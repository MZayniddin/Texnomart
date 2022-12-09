import './AppAds.scss';

//images
import phone from '../../assets/images/phone-min.png';
import QR from '../../assets/images/quar-code.png';
import playMarket from '../../assets/images/play-market.png'

const AppAds = () => {
  return (
    <div className='container'>
      <div className='app-banner'>
        <div className='app-banner__left'>
          <img src={phone} alt="google play" />
        </div>
        <div className='app-banner__right'>
          <div className='info-title'>Ilovani yuklang</div>
          <div className='info-desc'>
            Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!
          </div>
          <div className='info-quar'>
            <div className='code'>
              <img src={QR} alt="" />
            </div>
            <div className='text'>Kamerani  yo`naltiring va Texnomart ilovasini bepul yuklang</div>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.texnomart.app">
            <img src={playMarket} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppAds