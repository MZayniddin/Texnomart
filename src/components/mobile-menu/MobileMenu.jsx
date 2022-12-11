import './MobileMenu.scss';

//icons
import { MdManageSearch } from 'react-icons/md';
import { GiScales } from 'react-icons/gi';
import { BsCart3 } from 'react-icons/bs';
import { FiHeart, FiUser } from 'react-icons/fi'

const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
      <ul className='mobile-menu__wrap'>
        <li className='mobile-menu__item'>
          <button className='mobile-menu__link'>
            <MdManageSearch className='mobile-menu__icon'/>
            <span>Katalog</span>
          </button>
        </li>
        <li className='mobile-menu__item'>
          <button className='mobile-menu__link'>
            <GiScales className='mobile-menu__icon'/>
            <span>Taqqoslash</span>
          </button>
        </li>
        <li className='mobile-menu__item'>
          <button className='mobile-menu__link'>
            <BsCart3 className='mobile-menu__icon'/>
            <span>Savatcha</span>
          </button>
        </li>
        <li className='mobile-menu__item'>
          <button className='mobile-menu__link'>
            <FiHeart className='mobile-menu__icon'/>
            <span>Sevimlilar</span>
          </button>
        </li>
        <li className='mobile-menu__item'>
          <button className='mobile-menu__link'>
            <FiUser className='mobile-menu__icon'/>
            <span>Kirish</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu