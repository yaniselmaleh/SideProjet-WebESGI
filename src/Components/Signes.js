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
            <article className="col-4 card">
                <Card
                    icon={Fievre}
                    alt="Début de fièvre"
                    title="Début de fièvre"
                    texte="Un mal de gorge commelors d’une angine"
                />
            </article>

            <article className="col-4 card">
                <Card
                    icon={Toux}
                    alt="Toux"
                    title="Toux"
                    texte="Un mal de gorge commelors d’une angine"
                />
            </article>

            <article className="col-4 card">
                <Card
                    icon={MauxDeTete}
                    alt="Maux de tête"
                    title="Maux de tête"
                    texte="Un mal de gorge commelors d’une angine"
                />
            </article>

            <article className="col-4 card">
                <Card
                    icon={DifficultesRespiratoire}
                    alt="Mal de gorge"
                    title="Mal de gorge"
                    texte="Un mal de gorge commelors d’une angine"
                />
            </article>
        </div>
    </section>
);

export default Signes;


