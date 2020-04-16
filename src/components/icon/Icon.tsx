import React from 'react';

const Icon: React.FunctionComponent<{icon: string, count?: number, size?: number}> = (props) => {
    return (
        <i className={props.icon} aria-hidden="true"></i>
    )
}

export default Icon;