import React from "react";
import Card from "../Components/layout/Card"

import "../Sass/Components/_signes.scss";

// Img
import Fievre from "../images/signes/fievre.svg";
import Toux from "../images/signes/toux.svg";
import MauxDeTete from "../images/signes/maux-de-tete.svg";
import DifficultesRespiratoire from "../images/signes/difficultes-respiratoires.svg";

const Signes = () => (
    <section id="signes">
        <h2 className='title-big'>Quels sont les signes</h2>
        <span className='title-small'>Comment se manifestent les signes d’infections ?</span>

        <div className="flex conteneur">
            <article className="col-4">
                <Card className='card card--small' icon={Fievre} alt="Début de fièvre" title="Début de fièvre">
                    Chez 88% des malades, elle se situe autour de 37,5-38°
                </Card>
            </article>

            <article className="col-4">
                <Card className='card card--small' icon={Toux} alt="Toux" title="Toux">
                    Un mal de gorge comme lors d’une angine
                </Card>
            </article>

            <article className="col-4">
                <Card className='card card--small' icon={MauxDeTete} alt="Maux de tête" title="Maux de tête">
                    14 % des malades présentent des maux de tête violents
                </Card>
            </article>

            <article className="col-4">
                <Card className='card card--small' icon={DifficultesRespiratoire} alt="Difficultés respiratoires" title="Difficultés respiratoires">
                    Signe grave touchant 1/6p contractant la maladie
                </Card>
            </article>
        </div>
    </section>
);

export default Signes;


