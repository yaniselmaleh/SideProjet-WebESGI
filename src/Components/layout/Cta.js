import React  from 'react'
import '../../Sass/Components/_cta.scss';

const Cta = ({children, url, className, title, ...otherProps}) => (
    <React.Fragment>
        <a
            href={url}
            className={`cta-${className}`}
            title={title}
            target=""
            {...otherProps}
        >
            {children}
        </a>
    </React.Fragment>
)

export default Cta