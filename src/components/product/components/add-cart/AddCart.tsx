import React from 'react';
import './AddCart.scss';

const AddCart:React.FunctionComponent<{quantity: number, handleChange: any, reduceQunatity: any, increaseQunatity: any}> = ({quantity, handleChange, reduceQunatity, increaseQunatity}) => {
    return (
        <div className="add-cart">
            <div className="quantity">
                <button type="button" onClick={reduceQunatity}>-</button>
                <input type="text" name="quantity" value={quantity} onChange={handleChange}/>
                <button type="button" onClick={increaseQunatity}>+</button>
            </div>
            <div className="btn">
                <button type="button">Add to cart</button>
            </div>
        </div>
    )
}

export default AddCart;