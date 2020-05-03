import React from "react";
import '../Sass/Components/_me-proteger.scss'
import Card from "./layout/Card";
import World from "../images/meproteger/20-world.svg";
import HomeStay from "../images/meproteger/coronovirus-home-stay.svg";
import Cough from "../images/meproteger/cough.svg";
import Crowd from "../images/meproteger/crowd-public.svg";
import HomeQuarantine from "../images/meproteger/home-quarantine.svg";
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

                <Card className='card card--big mt-3' icon={HomeStay} alt="Début de fièvre" title="Début de fièvre">
                    Lavez-vous très régulièrement les mains plusieurs lave très régulièrement les mains plusieurs
                </Card>

                <Card className='card card--big mt-3' icon={Spreading} alt="Incubation du virus" title="Incubation du virus">
                    Le délai d’incubation du coronavirus COVID-19 est de 3 à 5 jours en général, il peut toutefois s’étendre jusqu’à 14 jours
                </Card>

                <Card className='card card--big mt-3' icon={HomeQuarantine} alt="Début de fièvre" title="Les différents gestes 123">
                    Lavez-vous très régulièrement les mains plusieurs lave très régulièrement les mains plusieurs
                </Card>
            </article>

            <article className="col-2 mt-espace">
                <span className='me-proteger__title'>Ce que <span className='me-proteger__title--red'> je ne devrai pas faire</span></span>
                <Card className='card card--big mt-3' icon={Cough} alt="Tousser sans se protéger" title="Tousser sans se protéger">
                    Lavez-vous très régulièrement les mains plusieurs lave très régulièrement les mains plusieurs.
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