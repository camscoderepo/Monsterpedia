import React from 'react';

const Card = ({name, type, species, description}) => {
    return (
        <div>
            <img />
            <div>
                <h2>{name}</h2>
                <h4>{type}</h4>
                <h4>{species}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;