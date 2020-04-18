import React, { Component } from 'react';
import './Product.scss';
import Related from './components/related';
import { ProductDetails } from '../../models/product';
import { ProductData } from '../../data/product';
import Details from './components/details';
import DescriptionContent from './components/description-content';
import DescriptionVideo from './components/description-video';
import DescriptionAccomodation from './components/description-accomodation/DescriptionAccomodation';
interface Props {

}

interface State {
    product: ProductDetails,
    activeSection: string,
    selectedColor: number | null
}

class Product extends Component<Props, State> {
    // state: State;
    constructor(props: Props) {
        super(props)
        this.state = {
            product: ProductData,
            activeSection: '',
            selectedColor: null
        }
    }
    componentDidMount() {
    }

    renderDescriptions() {
        let descriptions: any = [];
        this.state.product.descriptions.map(desp => {
            if (desp.type === 1) {
                descriptions.push(<DescriptionContent key={desp.id} description={desp}/>)
            } else if (desp.type === 2) {
                descriptions.push(<DescriptionVideo key={desp.id} description={desp}/>)
            } else {
                descriptions.push(<DescriptionAccomodation key={desp.id}/>)
            }
        })
        return descriptions;
    }

    render() {
        return (
            <div>
                <Details details={this.state.product.details}/>
                {this.renderDescriptions()}
                <Related products={this.state.product.related}/>
            </div>
        )
    }
}

export default Product;