/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import "../Sass/Components/_gestes-barrieres.scss"
import Cta from "../Components/layout/Cta";

import "../Sass/Components/_attestation.scss"

const GestesBarrieres = () => (
    <>
        <section id="Attestation" >
            <div className="conteneur">
                <h2 className="title-big">Attestation de déplacement dérogatoire</h2>
                <p className="title-small">Un dispositif de création numérique de l’attestation de déplacement dérogatoire<br></br>est désormais disponible, en complément du dispositif papier toujours valide.</p>
                        
                <div>
                    <Cta className="unfilled">Version Papier</Cta>
                    <Cta className="filled-blue">Version Numérique</Cta>
                </div>
            </div>
        </section>
        <footer><p>Développé avec &#128525; par Elie & Yanis</p></footer>
    </>
);

export default GestesBarrieres;