import './Footer.scss'

//components
import FooterTop from "./footer-top/FooterTop"
import FooterBottom from "./footer-bottom/FooterBottom"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__wrap container">
        <FooterTop/>
        <FooterBottom/>
      </div>
    </footer>
  )
}

export default Footer