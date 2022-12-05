import './HeaderCenter.scss';
import { useState } from 'react';
//icons 
import { FiMenu } from 'react-icons/fi';

//components
import HeaderNavMobile from '../header-nav-mobile/HeaderNavMobile';

const HeaderCenter = () => {
  const [isHeaderNavMobileActive, setIsHeaderNavMobileActive] = useState(false);
  return (
    <div className="header-center">
      <button className="header-center-catalog-bars"
        onClick={()=>{setIsHeaderNavMobileActive(true)}}>
        <FiMenu/>
      </button>
      {isHeaderNavMobileActive ? <div onClick={()=>{setIsHeaderNavMobileActive(false)}} className='full-overlay'></div> : <></>}
      <HeaderNavMobile isHeaderNavMobileActive={isHeaderNavMobileActive} setIsHeaderNavMobileActive={setIsHeaderNavMobileActive}/>
    </div>
  )
}

export default HeaderCenter