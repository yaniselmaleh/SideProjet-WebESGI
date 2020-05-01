import React from 'react'
import "../../Sass/Components/_card.scss"

const Card = ({children, className, icon, alt, title}) => (
    <div className={className}>
        <img src={icon} alt={alt}/>
            <div>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
    </div>
)

export default Card