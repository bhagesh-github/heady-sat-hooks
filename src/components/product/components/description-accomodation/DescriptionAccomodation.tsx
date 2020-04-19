import React from 'react';
import './DescriptionAccomodation.scss';
import { Descriptions } from '../../../../models/product';
import Icon from '../../../icon';

const DescriptionAccomodation: React.FunctionComponent<{description: Descriptions}> = ({description}) => {
    return (
        <div className="description-accomodatiom content-box">
            <div className="description-content-box">
                <div className="description-content">
                    <div className="image" style={{backgroundImage: 'url('+description.accomodation.image+')'}}>
                        {/* <img src={description.accomodation.image}/> */}
                    </div>
                    <div className="thumb-image">
                        <img src={description.accomodation.thumb}/>
                    </div>
                    <div className="download-btn">
                        <button><Icon icon="fa fa-download"/> Download Pdf</button>
                    </div>
                    <div className="sidetext">
                        Suggested Accomodation
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionAccomodation