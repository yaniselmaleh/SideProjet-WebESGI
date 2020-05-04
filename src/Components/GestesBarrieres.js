import React from 'react';
import "../Sass/Components/_gestes-barrieres.scss"
import Cta from "../Components/layout/Cta";
import Card from "../Components/layout/Card"

// Img
import HandSoap from "../images/gestes/hand-soap.svg";
import Distance from "../images/gestes/distance.svg";
import Mouchoir from "../images/gestes/mouchoir.svg";
import Contact from "../images/gestes/contact-main.svg";
import Bacterie6 from "../images/bacterie6.svg"


const GestesBarrieres = () => (
    <section id="GestesBarrieres">
        <img src={Bacterie6} alt="bacterie 6" className="bacterie"/>
        <div className="flex conteneur">
            <article className="col-2 mt-espace">
                <h2 className="title-big">Les différents gestes<br></br>barrières à adopter !</h2>
                <p id="labeur">Évitez de vous rendre dans un établissement de ‎santé si cela n’est pas nécessaire, pour que les ‎systèmes de santé  fonctionnent de la manière la ‎plus efficace possible et  puissent protéger tout le ‎monde, vous y compris.</p>
                <Cta className="filled-blue" url="https://solidarites-sante.gouv.fr/IMG/pdf/affiche_gestes_barrieres_fr.pdf" target='_blank'>En savoir plus </Cta>
            </article>

            <section className="col-2">
                <div className="flex">
                    <article className="col-2">
                        <Card className='card card--small' icon={HandSoap} alt="Lavez-vous les mains" title="Lavez-vous les mains">
                            Lavez-vous très régulièrement les mains plusieurs fois
                        </Card>
                    </article>

                    <article className="col-2">
                    <Card className='card card--small' icon={Distance} alt="Distance sociale" title="Distance sociale">
                        Restez à plus d’un mètre de distance les uns des autres
                    </Card>
                    </article>
                </div>

                <div className="flex">
                    <article className="col-2">
                        <Card className='card card--small' icon={Mouchoir} alt="Toussez dans votre coude" title="Toussez dans votre coude">
                            Toussez ou éternuez dans votre coude ou dans un mouchoir
                        </Card>
                    </article>

                    <article className="col-2">
                        <Card className='card card--small' icon={Contact} alt="Saluez sans les mains" title="Saluez sans les mains">
                            Saluez sans se serrer la main évitez les embrassades
                        </Card>
                    </article>
                </div>
            </section>
        </div>
    </section>
);

export default GestesBarrieres;
