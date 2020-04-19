import React from 'react';
import './Footer.scss';
import Menu from '../menus';
import Icon from '../icon';
import SocialLinks from '../social-links';

const Footer: React.FunctionComponent = () => {
    return (
        <footer>
            <div className="payment-types">
                <img src="assets/images/img-payment-types.jpg" alt="Payment Types"/>
            </div>
            <div className="newsletter">
                <h3>Grab Our Newsletter</h3>
            </div>
            <div className="footer-links">
                <div className="footer-logo"><img src="assets/images/logo-footer.png" alt="Logo"/></div>
                <Menu/>
                <SocialLinks/>
                <p>2017 &copy; Alpha Store.</p>
            </div>
        </footer>
    )
}

export default Footer;