import React, { Component } from 'react';
import Menus  from '../menus';
import Icon from '../icon';
import './Header.scss';

interface Props {

}

interface State {
    sidebarOpen: boolean
}


class Header extends Component<Props, State> {
    state: State;
    constructor(props: Props) {
        super(props);
        this.state = {
            sidebarOpen: false
        }
    }
    toggleMenu = () => {
        this.setState({
            sidebarOpen : !this.state.sidebarOpen
        })
    }
    render() {
        let sideBarOpen = this.state.sidebarOpen ? 'open' : 'closed';
        return(
            <header>
                <div className="toggle-menu flex align-center" onClick={this.toggleMenu}>
                    <span></span>
                </div>
                <div className="brand">
                    <a href=""><img src="assets/images/logo.png" alt="Logo"/></a>
                </div>
                <div className="flex align-center">
                    <Menus isOpen={sideBarOpen}/>
                    <ul className="top-links">
                        <li><Icon icon="fa fa-search"/></li>
                        <li><Icon icon="fa fa-heart-o"/></li>
                        <li><Icon icon="fa fa-shopping-bag"/></li>
                    </ul>
                </div>
            </header>
        )
    }
}


export default Header;