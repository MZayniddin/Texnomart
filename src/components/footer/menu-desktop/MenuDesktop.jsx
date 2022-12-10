import footerLinksData from '../../../dummy-data/site-links-data.json';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './MenuDesktop.scss';
//icon
import { FaTelegramPlane } from 'react-icons/fa'

const MenuDesktop = () => {
  return (
    <div className='menu-desktop'>
      <div className='menu-wrap'>
        <div className="menu-wrap__title">Kompaniya</div>
        <div className='menu-wrap__links'>
        {
          footerLinksData[0].links.map(link =>
            <Link key={uuidv4()} className='menu-wrap__link' to="/">{link}</Link> 
          )
        }
        </div>
      </div>
      <div className='menu-wrap'>
        <div className="menu-wrap__title">Ma'lumot</div>
        <div className='menu-wrap__links'>
        {
          footerLinksData[1].links.map(link =>
            <Link key={uuidv4()} className='menu-wrap__link' to="/">{link}</Link> 
          )
        }
        </div>
      </div>
      <div className='menu-wrap'>
        <div className="menu-wrap__title">Haridorga yordam</div>
        <div className='menu-wrap__links'>
        {
          footerLinksData[2].links.map(link =>
            <Link key={uuidv4()} className='menu-wrap__link' to="/">{link}</Link> 
          )
        }
        <a className="telegram-bot" href="https://t.me/Texnomart_retail_bot" rel="noreferrer" target="_blank" >
          <FaTelegramPlane className="telegram-bot__icon" /> <span>Bonusingizni bilib oling</span>
        </a>
        </div>
      </div>
    </div>
  )
}

export default MenuDesktop