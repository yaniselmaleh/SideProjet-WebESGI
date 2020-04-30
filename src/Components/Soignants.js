import React from "react";

import "../Sass/Components/_soignants.scss";
import SoignantsIllu from "../images/soignants.svg"

import Cta from "../Components/layout/Cta";

export default class Soignants extends React.Component {
    render(){
        return(
            <section id="soignants">
                <div className="flex conteneur">
                    <aside className="col-2">
                        <img src={SoignantsIllu} alt="soignant"/>
                    </aside>

                    <article className="col-2">
                        <h2>Urgence Covid-19,<br></br>aidons nos soignants !</h2>
                        <p>Face à la situation sanitaire actuelle sans précédent, la Fondation est pleinement mobilisée pour apporter un soutien complémentaire, en partenariat avec la Fédération Hospitalière de France, aux hôpitaux français.</p>
                        <Cta className="filled-white">Faire un don </Cta>
                    </article>
                </div>
            </section>
        )
    }
}
