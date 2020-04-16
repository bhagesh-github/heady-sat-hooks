import React from 'react';
import './Menus.scss';

const Menus: React.FunctionComponent<{isOpen: string}> = ({isOpen}) => {
    return (
        <div className={`menus ${isOpen}`}>
            <ul>
                <li><a href=""><span>Bedroom</span></a></li>
                <li><a href=""><span>Living Room</span></a></li>
                <li><a href=""><span>Office</span></a></li>
                <li><a href=""><span>Kitchen</span></a></li>
                <li><a href=""><span>Bathroom</span></a></li>
            </ul>
        </div>
    )
}

export default Menus;