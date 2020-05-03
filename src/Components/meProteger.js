import React from "react";
import '../Sass/Components/_me-proteger.scss'
import Card from "./layout/Card";
import World from "../images/meproteger/20-world.svg";
import HomeStay from "../images/meproteger/coronovirus-home-stay.svg";
import Cough from "../images/meproteger/cough.svg";
import Crowd from "../images/meproteger/crowd-public.svg";
import Masques from "../images/meproteger/masque.svg";
import Spreading from "../images/meproteger/spreading.svg";
import Bacterie4 from "../images/bacterie4.svg"
import Bacterie5 from "../images/bacterie5.svg"

const MeProteger = () => (
    <section className='me-proteger' id='me-proteger'>
        <img src={Bacterie4} alt="bacterie 4" className="bacterieTop"/>
        <h2 className='title-big'>Comment me protéger du Covid-19</h2>
        <span className='title-small'>
            Pour me protéger moi et mes proches, je reste isolé à domicile <br/>
            je réduis strictement les sorties sauf pour ravitaillement alimentaire
        </span>

        <div className='flex conteneur mt-espace'>

            <article className="col-2">
                <span className='me-proteger__title'>Ce que <span
                    className='me-proteger__title--green'>je devrai faire</span></span>

                <Card className='card card--big mt-3' icon={HomeStay} alt="Rester chez moi" title="Rester chez moi">
                    Je reste confiné chez moi et ne sors que pour les cas autorisées par le gouvernement 
                </Card>

                <Card className='card card--big mt-3' icon={Spreading} alt="Incubation du virus" title="Incubation du virus">
                    Le délai d’incubation du coronavirus COVID-19 est de 3 à 5 jours en général, il peut toutefois s’étendre jusqu’à 14 jours
                </Card>

                <Card className='card card--big mt-3' icon={Masques} alt="Je me protège" title="Je me protège">
                    Je mets un masque et des gants lors de mes déplacements afin d'éviter la transmission du virus
                </Card>
            </article>

            <article className="col-2 mt-espace">
                <span className='me-proteger__title'>Ce que <span className='me-proteger__title--red'> je ne devrai pas faire</span></span>
                <Card className='card card--big mt-3' icon={Cough} alt="Toussez sans me protéger" title="Toussez sans me protéger">
                    Je tousse dans un mouchoir ou dans mon coude afin de ne pas propager le virus
                </Card>
                <Card className='card card--big mt-3' icon={Crowd} alt="Rassemblements en public" title="Rassemblements en public">
                    Les rassemblements sont désormais interdits dans le pays, afin de freiner la propagation du
                    coronavirus
                </Card>
                <Card className='card card--big mt-3' icon={World} alt="Déplacements interdits" title="Déplacements interdits">
                    Il est possible que les accès à certains lieux publics ou à des plages soient restreints voire
                    interdits
                </Card>
            </article>
        </div>
        <img src={Bacterie5} alt="bacterie 5" className="bacterieBot"/>
    </section>
);


export default MeProteger;