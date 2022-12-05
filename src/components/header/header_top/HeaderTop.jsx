import React, { useState } from 'react';
import './HeaderTop.scss';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
// icons
import { BsTelephone, BsGeoAlt } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi'

//images
import logo from '../../../assets/images/texnomart-logo.a75bf76.svg'

const HeaderTop = () => {
  const regionsArr = [
    "Toshkent", "Toshkent viloyati", "Buxoro viloyati",
    "Andijon viloyati", "Farg'ona viloyati", "Namangan viloyati",
    "Namangan viloyati", "Samarqand viloyati", "Respublika Qoraqalpog'iston"
  ]

  const langsArr = ["O'Z", "РУ"]

  const [isRegionActive, setIsRegionActive] = useState(false);
  const [activeRegion, setActiveRegion] = useState("Toshkent");
  
  const [isLangMouseOver, setIsLangMouseOver] = useState(false);
  return (
    <div className='header-top'>
      <div className="container header-top-inner">
        <span className='logo-top-left'>
          <Link to="/">
            <img src={logo} alt="texnomart-logo" />
          </Link>
        </span>
        <div className='header-top__right'>
          <span className='phone-m'>
            <a href="tel:+998712099944">
              <BsTelephone/>
            </a>
          </span>
          <div className='header-region' onMouseLeave={()=>{setIsRegionActive(false)}} onMouseOver={()=>{setIsRegionActive(true)}}>
            <button className='header-region-btn'>
                <span className='location-icon'>
                  <BsGeoAlt/>
                </span>
                <span className='region-text'>{activeRegion}</span>
            </button>
            <div className='header-region-list' style={isRegionActive ? {display: "block"} : {display: "none"} }>
              <ul onClick={(e) => {
                setActiveRegion(e.target.textContent)
                setIsRegionActive(false)}}>
              {
                regionsArr.map(region =>
                  <li key={uuidv4()}>
                    <Link className='header-region__link' to="/">{region}</Link>
                  </li>  
                )
              }
              </ul>
            </div>

          </div>
          <div className='header-top-pages'>
            <ul>
              <li>
                <Link to="/">Bizning do'konlarimiz</Link>
              </li>
              <li>
                <Link to="/" className='header-link__b2b'>B2B savdosi</Link>
              </li>
              <li>
                <Link to="/">Muddatli to'lovga sotib olish</Link>
              </li>
              <li>
                <Link to="/">To'lov usullari</Link>
              </li>
              <li>
                <Link to="/">Mahsulotlar uchun kafolat</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='header-top__right-md'>
          <a href="tel:+99871 209 99 44">
            <span className='header-call-center'>Aloqa markazi : </span>
            <span className='header-call-middle'>
              <BsTelephone/>
            </span>
            <span className='header-call-number'>+99871 209 99 44</span>
          </a>

          <div className='language-md' onMouseLeave={()=>{setIsLangMouseOver(false)}} onMouseOver={()=>{setIsLangMouseOver(true)}}>
            <button className='language-md-btn'>
              <BiWorld className='language-md-world-icon'/>
              <span className='language-md-text'>O'Z</span>
              <FiChevronDown className='language-md-down-icon'/>
            </button>
            <div className='language-md-list' style={isLangMouseOver ? {display: "block"}:{display: "none"}}>
              <ul>
                {
                  langsArr.map(lang =>
                    <li key={uuidv4()}>
                      <Link to='/'>{lang}</Link>
                    </li>  
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop