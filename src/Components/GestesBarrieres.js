import React from 'react';
import "../Sass/Components/_gestes-barrieres.scss"
import Cta from "../Components/layout/Cta";
import Card from "../Components/layout/Card"

// Img
import HandSoap from "../images/gestes/hand-soap.svg";
import Distance from "../images/gestes/distance.svg";
import Mouchoir from "../images/gestes/mouchoir.svg";
import Contact from "../images/gestes/contact-main.svg";

const GestesBarrieres = () => (
    <section id="GestesBarrieres">
        <div className="flex conteneur">
            <article className="col-2 mt-espace">
                <h2 className="title-big">Les différents gestes<br></br>barrières à adopter !</h2>
                <p id="labeur">Évitez de vous rendre dans un établissement de ‎santé si cela n’est pas nécessaire, pour que les ‎systèmes de santé  fonctionnent de la manière la ‎plus efficace possible et  puissent protéger tout le ‎monde, vous y compris.</p>
                <Cta className="filled-blue" url="https://solidarites-sante.gouv.fr/IMG/pdf/affiche_gestes_barrieres_fr.pdf" target='_blank'>En savoir plus </Cta>
            </article>

            <section className="col-2">
                <div className="flex">
                    <article className="col-2">
                        <Card className='card card--small' icon={HandSoap} alt="Début de fièvre" title="Début de fièvre">
                            Chez 88% des malades, elle se situe autour de 37,5-38°
                        </Card>
                    </article>

                    <article className="col-2">
                    <Card className='card card--small' icon={Distance} alt="Début de fièvre" title="Début de fièvre">
                        Chez 88% des malades, elle se situe autour de 37,5-38°
                    </Card>
                    </article>
                </div>

                <div className="flex">
                    <article className="col-2">
                        <Card className='card card--small' icon={Mouchoir} alt="Début de fièvre" title="Début de fièvre">
                            Chez 88% des malades, elle se situe autour de 37,5-38°
                        </Card>
                    </article>

                    <article className="col-2">
                    <Card className='card card--small' icon={Contact} alt="Début de fièvre" title="Début de fièvre">
                        Chez 88% des malades, elle se situe autour de 37,5-38°
                    </Card>
                    </article>
                </div>
            </section>
        </div>
    </section>
);

export default GestesBarrieres;