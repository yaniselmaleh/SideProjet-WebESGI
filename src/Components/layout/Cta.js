import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../Sass/Components/_cta.scss';

class Cta extends Component{
    
    render(props){
        return(
            <React.Fragment>
                <Link 
                    to={this.props.url} 
                    href={this.props.url}
                    className={`cta-${this.props.className}`}
                    title={this.props.title}
                    target=""
                    dangerouslySetInnerHTML={{__html: this.props.name}}
                >
                </Link>
            </React.Fragment>
        )
    }
}

export default Cta