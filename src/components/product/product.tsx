import React, { Component } from 'react';
import './Product.scss';
import Related from './components/related';
import { ProductDetails } from '../../models/product';
import { ProductData } from '../../data/product';
import Details from './components/details';
import DescriptionContent from './components/description-content';
import DescriptionVideo from './components/description-video';
import DescriptionAccomodation from './components/description-accomodation/DescriptionAccomodation';
import Reviews from './components/reviews';
import SectionTitle from './components/section-title';
import SocialLinks from '../social-links/SocialLinks';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

interface Props {

}

interface State {
    product: ProductDetails,
    activeSection: string,
    selectedColor: number | null,
    quantity: number,
    activeTitle: string
}

class Product extends Component<Props, State> {
    // state: State;
    constructor(props: Props) {
        super(props)
        this.state = {
            product: ProductData,
            activeSection: '',
            selectedColor: null,
            quantity: 0,
            activeTitle:''
        }
    }
    componentDidMount() {
        let lastResize = 0;
        window.addEventListener('resize', () => {
            let windowWidth = window.innerWidth;
            if (windowWidth < 991) {
                (document.getElementById('sectionMenu') as any).classList.add('mobile');
            } else {
                (document.getElementById('sectionMenu') as any).classList.remove('mobile');
            }
            if (windowWidth > lastResize) {
                let currentOffset = (document.getElementById('sectionMenu') as any).offsetLeft;
                let newOffset = (currentOffset + 5);
                if (windowWidth < 1200 && windowWidth > 991 && newOffset < 185) {
                    (document.getElementById('sectionMenu') as any).style.left = newOffset+'px';
                } else {
                    (document.getElementById('sectionMenu') as any).style.left = 185+'px';
                }
            } else {
                let currentOffset = (document.getElementById('sectionMenu') as any).offsetLeft;
                let newOffset = (currentOffset - 5);
                if (windowWidth < 1200 && windowWidth > 991 && newOffset < 185) {
                    (document.getElementById('sectionMenu') as any).style.left = newOffset+'px';
                } else {
                    (document.getElementById('sectionMenu') as any).style.left = 185+'px';
                }
            }
            lastResize = windowWidth;
        }, false)
    }

    renderDescriptions() {
        let descriptions: any = [];
        this.state.product.descriptions.map(desp => {
            if (desp.type === 1) {
                descriptions.push(<Element name="test2" className={`element ${this.state.activeSection === 'desp1' ? 'active' : ''}`} key={desp.id}><DescriptionContent  description={desp}/></Element>)
            } else if (desp.type === 2) {
                descriptions.push(<Element name="test3" className={`element ${this.state.activeSection === 'desp2' ? 'active' : ''}`} key={desp.id}><DescriptionVideo description={desp}/></Element>)
            } else {
                descriptions.push(<Element name="test4" className={`element ${this.state.activeSection === 'desp3' ? 'active' : ''}`} key={desp.id}><DescriptionAccomodation  description={desp}/></Element>)
            }
        })
        return descriptions;
    }

    handleChange = (event: any) => {
        this.setState({
            quantity: event.target.value
        })
    }

    reduceQunatity = () => {
        let quantity = this.state.quantity ? this.state.quantity - 1 : 0;
        this.setState({
            quantity
        })
    }

    increaseQunatity = () => {
        let quantity = this.state.quantity + 1;
        this.setState({
            quantity
        })
    }


    handleSetActive = (to: any) => {
        let activeSection = to;
        switch(activeSection) {
            case 'test1':
                this.setState({
                    activeTitle: 'Details',
                    activeSection: ''
                })
                break;
            case 'test2':
                this.setState({
                    activeTitle: 'Description',
                    activeSection: 'desp1'
                })
                break;
            case 'test3':
                this.setState({
                    activeTitle: 'Description',
                    activeSection: 'desp2'
                })
                break;
            case 'test4':
                this.setState({
                    activeTitle: 'Description',
                    activeSection: 'desp3'
                })
                break;
            case 'test5':
                this.setState({
                    activeTitle: 'Reviews',
                    activeSection: ''
                })
                break;
            case 'test6':
                this.setState({
                    activeTitle: 'Related Products',
                    activeSection: ''
                })
                break;
            default:
                this.setState({
                    activeTitle: 'Details',
                    activeSection: ''
                })

        }
    }

    render() {
        return (
            <div className="main-content">
                <div className="sidebar">
                    <SectionTitle title={this.state.activeTitle}/>
                    <div className="section-menu" id="sectionMenu">
                        <ul>
                            <li>
                                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={-157} duration={500} onSetActive={this.handleSetActive}>
                                    Details
                                    <div className={this.state.activeTitle === 'Details' ? 'active' : ''}></div>
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="test2" spy={true} smooth={true} offset={-150} duration={500} onSetActive={this.handleSetActive}>
                                    Description
                                    <div className={(this.state.activeSection === 'desp1' || this.state.activeSection === 'desp2' || this.state.activeSection === 'desp3') ? 'active' : ''}></div>
                                </Link>
                                    <div style={{opacity:0, visibility: 'hidden', display: 'none'}}>
                                    <Link activeClass="active" to="test3" spy={true} smooth={true} offset={-150} duration={500} onSetActive={this.handleSetActive}>
                                        Description
                                    </Link>
                                    <Link activeClass="active" to="test4" spy={true} smooth={true} offset={-150} duration={500} onSetActive={this.handleSetActive}>
                                        Description
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link activeClass="active" to="test5" spy={true} smooth={true} offset={-160} duration={500} onSetActive={this.handleSetActive}>
                                    Reviews
                                    <div className={this.state.activeTitle === 'Reviews' ? 'active' : ''}></div>
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="test6" spy={true} smooth={true} offset={-157} duration={500} onSetActive={this.handleSetActive}>
                                    Related Products
                                    <div className={this.state.activeTitle === 'Related Products' ? 'active' : ''}></div>
                                </Link>
                            </li>
                        </ul>
                        <SocialLinks/>
                    </div>
                </div>
                <div className="wrapper">
                    <Element name="test1" className="element">
                        <Details details={this.state.product.details} quantity={this.state.quantity} handleChange={this.handleChange} reduceQunatity={this.reduceQunatity} increaseQunatity={this.increaseQunatity}/>
                    </Element>
                    {this.renderDescriptions()}
                    <Element name="test5" className="element">
                        <Reviews review={this.state.product.reviews}/>
                    </Element>
                    <Element name="test6" className="element">
                        <Related products={this.state.product.related}/>
                    </Element>
                </div>
            </div>
        )
    }
}

export default Product;