import React  from 'react'
import { Link } from "react-router-dom";
import '../../Sass/Components/_cta.scss';

const Cta = ({children, url, className, title}) => (
    <React.Fragment>
        <Link
            to={url}
            href={url}
            className={`cta-${className}`}
            title={title}
            target=""
        >
            {children}
        </Link>
    </React.Fragment>
)

export default Cta