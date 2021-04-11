import React from 'react';
import Card from './Card';


const CardList = ({ monsters }) => {
    return(
        <div>
            {
                monsters.map((user, i) => {
                    return (
                        <Card
                         key={i}
                         id={monsters[i].id}
                         name={monsters[i].name}
                         type={monsters[i].type}
                         species={monsters[i].species}
                         description={monsters[i].description}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;