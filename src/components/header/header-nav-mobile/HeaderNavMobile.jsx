import { Link } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import dataLinks from '../../../dummy-data/site-links-data.json';
import './HeaderNavMobile.scss';

// icons 
import { BsGrid, BsClockHistory, BsBoxSeam, BsQuestionDiamond, BsChevronDown, BsTelephone } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';
import { TbExchange } from 'react-icons/tb';
import { BiWorld } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';

//logo 
import logoWhite from '../../../assets/images/texnomart-logo-white.svg'

const HeaderNavMobile = ({isHeaderNavMobileActive, setIsHeaderNavMobileActive}) => {
  const [isAccordionActive, setIsAccordionActive] = useState(false);
  return (
    <div className={isHeaderNavMobileActive ? "header-nav-mobile header-nav-mobile__active" : "header-nav-mobile"}>
        <div className='nav-top'>
          <div className='nav-top-header'>
            <span>
              <Link to="/">
                <img src={logoWhite} alt="Site Logo" />
              </Link>
            </span>
            <button className='icon-close' onClick={()=>{setIsHeaderNavMobileActive(false)}}>
              <IoClose/>
            </button>
          </div>
          <div className='nav-top-login'>
            <div className='nav-user'>
              <FiUser/>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
              <button className='nav-top-btn-login'>Kirish</button>
              <div style={{display: "flex", alignItems: "center"}}>
                <span className='nav-line'></span>
                <button className='nav-top-btn-register'>Ro'yxatdan o'tish</button>
              </div>            
            </div>
          </div>
        </div>
        <div className='header-nav-list'>
          <ul>
            <li>
              <button className='nav-link nav-link__catalog'>
                <div className='nav-link__icon'>
                  <BsGrid/>
                </div>
                <span className='nav-link__text'>
                  Maxsulotlar katalogi
                </span>
              </button>
            </li>
            <li>
              <Link className='nav-link' to="/">
                <div className='nav-link__icon'>
                  <GrMapLocation/>
                </div>
                <span className='nav-link__text'>
                  Bizning do'konlarimiz
                </span>
              </Link>
            </li>
            <li>
              <Link className='nav-link' to="/">
                <div className='nav-link__icon'>
                  <TbExchange/>
                </div>
                <span className='nav-link__text'>
                  B2B savdosi
                </span>
              </Link>
            </li>
            <li>
              <Link className='nav-link' to="/">
                <div className='nav-link__icon'>
                  <BsClockHistory/>
                </div>
                <span className='nav-link__text'>
                  Muddatli to'lovga sotib olish
                </span>
              </Link>
            </li>
            <li>
              <Link className='nav-link' to="/">
                <div className='nav-link__icon'>
                  <BsBoxSeam/>
                </div>
                <span className='nav-link__text'>
                  Buyurmat holati
                </span>
              </Link>
            </li>
            <li onClick={()=>{setIsAccordionActive(!isAccordionActive)}}>
              <span className='nav-link nav-link__accordion'>
                <div style={{display: "flex", alignItems: "center"}}>
                  <div className='nav-link__icon'>
                    <BsQuestionDiamond/>
                  </div>
                  <span className='nav-link__text'>
                    Ma'lumot
                  </span>
                </div>
                <span className='icon-transition' style={isAccordionActive ? {transform: "rotate(180deg)"} : {transform: "rotate(0)"}}>
                  <BsChevronDown/>
                </span>
              </span>
              <ul className='nav-accordion-content'
                style={isAccordionActive ? {height: "396px"} : {height: "0", display: "none"}}>
                {
                  dataLinks.map(item => 
                    item.links.map(link =>
                    <li key={uuidv4()}>
                      <Link className='link-accordion' to="/">
                        {link}
                      </Link>
                    </li>
                    )  
                  )
                }
              </ul>
            </li>
            <li>
              <div className='nav-line-top'></div>
              <div className='nav-link nav-link__accordion'>
                <div style={{display: "flex", alignItems: "center"}}>
                  <div className='nav-link__icon'>
                    <BiWorld/>
                  </div>
                  <span className='nav-link__text'>
                    Til
                  </span>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                  <Link className='nav-language-link' to="/">Ру</Link>
                  <Link className='nav-language-link nav-language-link__active' to="/">O'z</Link>
                </div>
              </div>
            </li>
            <li>
              <div className='nav-line-top'></div>
              <a href="tel:+998712099944" className='nav-link'>
                <div className='nav-link__icon'>
                  <BsTelephone/>
                </div>
                <span className='nav-link__text'>+99871 209 99 44</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default HeaderNavMobile