import './CatalogDropdown.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import catalogData from '../../../dummy-data/catolog-data.json'
//icons
import { FiChevronRight } from 'react-icons/fi'

const CatalogDropdown = ({isCatalogActive}) => {
  const [activeList, setActiveList] = useState(0);
  return (
    <div className={isCatalogActive ? 'catalog-dropdown catalog-dropdown__active' : "catalog-dropdown"}>
      <div className="container">
        <div className='catalog-dropdown-inner'>
          <div className='catalog-left'>
            <div className='catalog-nav'>
              <ul>
              {
                catalogData.map(({id, category, imgURL}) =>
                  <li key={id} className={id === activeList ? "catalog__active" : null} onMouseOver={()=>{setActiveList(id)}} >
                    <Link className='catalog-parent__link' to="/">
                      <div>
                        <span className='catalog-icon'>
                          <img src={imgURL} alt={category} />
                        </span>
                        <span className='catalog-title'>{category}</span>
                      </div>
                      <span className='catalog-icon-right'>
                        <FiChevronRight/>
                      </span>
                    </Link>
                  </li>
                )
              }
              </ul>
            </div>
          </div>
          <div className='catalog-right'>
          {
            catalogData.map(({id, category, data}) =>
              <aside key={id} style={activeList === id ? {display: "block"} : {display: "none"}}>
                <div className='catalog-title'>{category}</div>
                <div className='catalog-row'>
                {
                  data.map(({content}) =>
                    <div className='catalog-col' key={uuidv4()}>
                    {
                      content.map(productItem =>
                        <div className='catalog-col__item' key={uuidv4()}>
                          <div>
                            <Link className='catalog-second'>{productItem.product}</Link>
                          </div>
                          {
                            productItem.types ? 
                            <ul>
                              {
                                productItem.types.map(typeItem =>
                                  <li key={uuidv4()}>
                                    <Link className='catalog-last'>{typeItem}</Link>
                                  </li>
                                )
                              }
                            </ul>
                            :
                            <></>
                          }
                        </div>  
                      )
                    }
                    </div>
                  )
                }
                </div>
              </aside>  
            )
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogDropdown