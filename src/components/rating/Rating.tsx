import React from 'react';
import './Rating.scss';
import Icon from '../icon';

const Rating: React.FunctionComponent<{count: number}> = ({count}) => {
    const getRating = () => {
        const maxCount: number = 5;
        const rating = count;
        let i: number = 0;
        let content = [];
        while(i < maxCount) {
            if (i < rating) {
                content.push(<Icon key={i} icon="fa fa-star"/>)
            } else {
                content.push(<Icon key={i} icon="fa fa-star-o"/>)
            }
            i++;
        }
        return content;
    }

    return <span>{getRating()}</span>
}

export default Rating;