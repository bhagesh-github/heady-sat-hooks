import React from 'react';
import Icon from '../icon/Icon';

const SocialLinks: React.FunctionComponent = () => {
    return (
        <ul className="social-links">
            <li><a href=""><Icon icon="fa fa-facebook"/></a></li>
            <li><a href=""><Icon icon="fa fa-twitter"/></a></li>
            <li><a href=""><Icon icon="fa fa-pinterest"/></a></li>
        </ul>
    )
}

export default SocialLinks;