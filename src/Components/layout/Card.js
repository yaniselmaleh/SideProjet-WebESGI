import React from 'react'
import "../../Sass/Components/_card.scss"
import "../../Sass/Components/_grid.scss"

const Card = ({icon, alt, title, texte}) => (
    <React.Fragment>
        <img src={icon} alt={alt} />
        <h3>{title}</h3>
        <p>{texte}</p>
    </React.Fragment>
)

export default Card