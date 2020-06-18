import React, {useState, useEffect} from 'react';
import './Product.scss';
import SectionTitle from './components/section-title/SectionTitle';
import SocialLinks from '../social-links/SocialLinks';
import { ProductData } from '../../data/product';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Details from './components/details/Details';
import Reviews from './components/reviews/Reviews';
import Related from './components/related/Related';
import DescriptionContent from './components/description-content';
import DescriptionVideo from './components/description-video';
import DescriptionAccomodation from './components/description-accomodation/DescriptionAccomodation';

const Product: React.FunctionComponent<any> = () => {
    const [activeSectionTitle, setActiveSectionTitle] = useState('');
    const [activeSection, setActiveSection] = useState('');
    const [product, setProduct] = useState(ProductData);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
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
    }, [])

    const handleSetActive = (to: any) => {
        let activeSection = to;
        switch(activeSection) {
            case 'test1':
                setActiveSectionTitle('Details');
                setActiveSection('');
                break;
            case 'test2':
                setActiveSectionTitle('Description');
                setActiveSection('desp1');
                break;
            case 'test3':
                setActiveSectionTitle('Description');
                setActiveSection('desp2');
                break;
            case 'test4':
                setActiveSectionTitle('Description');
                setActiveSection('desp3');
                break;
            case 'test5':
                setActiveSectionTitle('Reviews');
                setActiveSection('');
                break;
            case 'test6':
                setActiveSectionTitle('Related Products');
                setActiveSection('');
                break;
            default:
                setActiveSectionTitle('Details');
                setActiveSection('');
        }
    }

    const renderDescriptions = () => {
        let descriptions: any = [];
        product.descriptions.map(desp => {
            if (desp.type === 1) {
                descriptions.push(<Element name="test2" className={`element ${activeSection === 'desp1' ? 'active' : ''}`} key={desp.id}><DescriptionContent  description={desp}/></Element>)
            } else if (desp.type === 2) {
                descriptions.push(<Element name="test3" className={`element ${activeSection === 'desp2' ? 'active' : ''}`} key={desp.id}><DescriptionVideo description={desp}/></Element>)
            } else {
                descriptions.push(<Element name="test4" className={`element ${activeSection === 'desp3' ? 'active' : ''}`} key={desp.id}><DescriptionAccomodation  description={desp}/></Element>)
            }
        })
        return descriptions;
    }

    const handleChange = (event: any) => {
        setQuantity(event.target.value);
    }

    const reduceQunatity = () => {
        setQuantity((quantity) => quantity ? quantity - 1 : 0)
    }

    const increaseQunatity = () => {
        setQuantity((quantity) => quantity + 1)
    }

    return (
        <div className="main-content">
            <div className="sidebar">
                <SectionTitle title={activeSectionTitle}/>
                <div className="section-menu" id="sectionMenu">
                    <ul>
                        <li>
                            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={-157} duration={500} onSetActive={handleSetActive}>
                                Details
                                <div className={activeSectionTitle === 'Details' ? 'active' : ''}></div>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="test2" spy={true} smooth={true} offset={-150} duration={500} onSetActive={handleSetActive}>
                                Description
                                <div className={(activeSection === 'desp1' || activeSection === 'desp2' || activeSection === 'desp3') ? 'active' : ''}></div>
                            </Link>
                                <div style={{opacity:0, visibility: 'hidden', display: 'none'}}>
                                <Link activeClass="active" to="test3" spy={true} smooth={true} offset={-150} duration={500} onSetActive={handleSetActive}>
                                    Description
                                </Link>
                                <Link activeClass="active" to="test4" spy={true} smooth={true} offset={-150} duration={500} onSetActive={handleSetActive}>
                                    Description
                                </Link>
                            </div>
                        </li>
                        <li>
                            <Link activeClass="active" to="test5" spy={true} smooth={true} offset={-160} duration={500} onSetActive={handleSetActive}>
                                Reviews
                                <div className={activeSectionTitle === 'Reviews' ? 'active' : ''}></div>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="test6" spy={true} smooth={true} offset={-157} duration={500} onSetActive={handleSetActive}>
                                Related Products
                                <div className={activeSectionTitle === 'Related Products' ? 'active' : ''}></div>
                            </Link>
                        </li>
                    </ul>
                    <SocialLinks/>
                </div>
            </div>
            <div className="wrapper">
                <Element name="test1" className="element">
                    <Details details={product.details} quantity={quantity} handleChange={handleChange} reduceQunatity={reduceQunatity} increaseQunatity={increaseQunatity}/>
                </Element>
                {renderDescriptions()}
                <Element name="test5" className="element">
                    <Reviews review={product.reviews}/>
                </Element>
                <Element name="test6" className="element">
                    <Related products={product.related}/>
                </Element>
            </div>
        </div>
    )
}

export default Product;