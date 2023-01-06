import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import catalogData from "../../dummy-data/catolog-data.json";
import Logo from "../../assets/images/texnomart-logo-white.svg";
import "./MobileSidebar.scss";

const MobileSidebar = ({ setMobSidebarActive, isMobSideberActive }) => {
  const [isCategoryChoosen, setCategoryChoosen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeAccordion, setActiveAccrdion] = useState("");
  const [isAccordionActive, setAccordionActive] = useState(false);

  return (
    <aside className={isMobSideberActive ? "mobile-sidebar active" : "mobile-sidebar"}>
      <div className="mobile-sidebar-header">
        <Link className="nuxt-link-active" to="/">
          <img src={Logo} alt="" width={159} height={34} />
        </Link>
        <button onClick={()=>{setMobSidebarActive(false)}}>
          <CgClose />
        </button>
      </div>
      <div className="scroll-catalog">
        {!isCategoryChoosen && (
          <ul className="first-list">
            {catalogData.map((item) => (
              <li key={item.id}>
                <button
                  className="catalog-btn-first"
                  onClick={() => {
                    setCategoryChoosen(true);
                    setActiveCategory(item);
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img className="catalog-icon" src={item.imgURL} alt="" />
                    {item.category}
                  </div>
                  <span className="icon-right">
                    <FiChevronRight />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {isCategoryChoosen && (
          <div style={{ position: "relative" }}>
            <button
              className="btn-category-back"
              onClick={() => {
                setCategoryChoosen(false);
              }}
            >
              <FiChevronLeft />
              <span className="category-title">{activeCategory.category}</span>
            </button>
            <div className="category-box-child">
              <div className="accordion">
                {activeCategory.data.map(({ content }) =>
                  content.map((item) => (
                    <div key={uuidv4()} className="accordion__item">
                      <button
                        className="accordion__trigger"
                        onClick={() => {
                          setActiveAccrdion(item.product);
                          setAccordionActive(!isAccordionActive);
                        }}
                      >
                        {item.types ? (
                          <div className="accordion-text">{item.product}</div>
                        ) : (
                          <Link to="/" className="accordion-text">
                            {item.product}
                          </Link>
                        )}

                        {item.types && (
                          <span
                            className="icon-right"
                            style={
                              isAccordionActive &&
                              item.product === activeAccordion
                                ? { transform: "rotate(90deg)" }
                                : { transform: "rotate(0)" }
                            }
                          >
                            <FiChevronRight />
                          </span>
                        )}
                      </button>

                      <div
                        className={
                          isAccordionActive && activeAccordion === item.product
                            ? "accordion__content accordion__content_active"
                            : "accordion__content"
                        }
                        style={!item?.types ? { animation: "none" } : null}
                      >
                        <div className="category-acc-content">
                          {item?.types?.map((type) => (
                            <Link
                              key={uuidv4()}
                              className="category-wrap__link"
                              to="/"
                            >
                              {type}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default MobileSidebar;