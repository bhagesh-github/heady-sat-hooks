import React from 'react';
import './DescriptionVideo.scss';
import { Descriptions } from '../../../../models/product';
import Icon from '../../../icon';

const DescriptionVideo: React.FunctionComponent<{description: Descriptions}> = ({description}) => {
    return (
        <div className="description-video content-box">
            <div className="description-content-box">
                <div className="image" style={{backgroundImage: 'url('+description.image+')'}}>
                    <div className="video-icon">
                        <Icon icon="fa fa-play"/>
                    </div>
                </div>
                <div className="title">
                    <h2>{description.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default DescriptionVideo;