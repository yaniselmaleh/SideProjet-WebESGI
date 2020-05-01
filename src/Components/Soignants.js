import React from "react";

import "../Sass/Components/_soignants.scss";
import "../Sass/Components/_cta.scss";
import SoignantsIllu from "../images/soignants.svg"

// import Cta from "../Components/layout/Cta";

export default class Soignants extends React.Component {
    render(){
        return(
            <section id="soignants">
                <div className="flex conteneur">
                    <aside className="col-2">
                        <img src={SoignantsIllu} alt="soignant"/>
                    </aside>

                    <article className="col-2">
                        <h2 className="title-big">Urgence Covid-19,<br></br>aidons nos soignants !</h2>
                        <p>Face à la situation sanitaire actuelle sans précédent, la Fondation est pleinement mobilisée pour apporter un soutien complémentaire, en partenariat avec la Fédération Hospitalière de France, aux hôpitaux français.</p>
                        {/* <Cta className="filled-white" to="google.fr">Faire un don </Cta> */}
                        <a href="https://don.fondationhopitaux.fr/" title="Aigons nos soignants, urgence Covid-19" target="_blank" rel="noopener noreferrer" className="cta-filled-white"> Faire un don  </a>
                    </article>
                </div>
            </section>
        )
    }
}
