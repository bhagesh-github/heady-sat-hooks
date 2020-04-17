import React from 'react';
import './Footer.scss';
import Menu from '../menus';
import Icon from '../icon';

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
                <ul className="social-links">
                    <li><a href=""><Icon icon="fa fa-facebook"/></a></li>
                    <li><a href=""><Icon icon="fa fa-twitter"/></a></li>
                    <li><a href=""><Icon icon="fa fa-pinterest"/></a></li>
                </ul>
                <p>2017 &copy; Alpha Store.</p>
            </div>
        </footer>
    )
}

export default Footer;