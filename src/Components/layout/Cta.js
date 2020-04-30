import React from 'react'
import { Link } from "react-router-dom";
import '../../Sass/Components/_cta.scss';

const Cta = ({url, className, title, name}) => (
    <React.Fragment>
        <Link
            to={url}
            href={url}
            className={`cta-${className}`}
            title={title}
            target=""
        >
            {name}
        </Link>
    </React.Fragment>
)

export default Cta