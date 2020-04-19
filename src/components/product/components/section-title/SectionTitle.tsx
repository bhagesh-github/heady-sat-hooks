import React from 'react';
import './SectionTitle.scss';

const SectionTitle: React.FunctionComponent<{title: string}> = ({title}) => {
    return (
        <h2 className="section-title">{title}</h2>
    )
}

export default SectionTitle;