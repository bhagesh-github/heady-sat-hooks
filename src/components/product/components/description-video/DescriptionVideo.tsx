import React from 'react';
import './DescriptionVideo.scss';
import { Descriptions } from '../../../../models/product';

const DescriptionVideo: React.FunctionComponent<{description: Descriptions}> = ({description}) => {
    return (
        <div className="description-video content-box">
            <div className="description-content-box">
                <div className="image">
                    <img src={description.image} alt=""/>
                </div>
                <div className="title">
                    <h2>{description.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default DescriptionVideo;