import React, { Component } from 'react';
import './product.scss';
import Related from './components/related';
import { Details, RelatedProducts } from '../../models/product';
import { ProductData } from '../../data/product';

interface Props {

}

interface State {
    id: number,
    details: Details,
    related: RelatedProducts[]
}


class Product extends Component<Props, State> {
    state: State;
    constructor(props: Props) {
        super(props)
        this.state = ProductData;
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <Related products={this.state.related}/>
            </div>
        )
    }
}

export default Product;