import React from 'react';
import './DescriptionContent.scss';
import { Descriptions } from '../../../../models/product';

const DescriptionContent: React.FunctionComponent<{description: Descriptions}> = ({description}) => {
    return (
        <div className="description-content content-box">
            <div className="description-content-box">
                <div className="image" style={{backgroundImage: `url(${description.image})`}}>
                    {/* <img src={description.image} alt=""/> */}
                </div>
                <div className="content">
                    <div className="title">
                        <h2>{description.title}</h2>
                    </div>
                    <p>{description.content}</p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionContent;