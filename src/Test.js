import React from 'react'
import "./Test.css"
import {useState} from 'react'
import slytherineImage from "./Slytherin.png"
import gryffindorImage from "./Gryffindor.png"
import ravenclawImage from "./Ravenclaw.png"
import hufflepuffImage from "./Hufflepuff.png"

function Test() {
    const [slytherin, setSlytherin] = useState(0)
    const [gryffindor, setGryffindor] = useState(0)
    const [hufflepuff, setHufflepuff] = useState(0)
    const [ravenclaw, setRavenclaw] = useState(0)
    const [step, setStep] = useState(1)

    const handleStep = () => {
        setStep(step+1)
    }






    return (
        <div>
            
            {(() => {
                if (step===1) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>TWÓJ ULUBIONY KOLOR:</h1>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>czerwony</button>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>żółty</button>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>niebieski</button>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>zielony</button>
                            </div>
                        </div>
                    )
                } else if (step===2) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>TWOJE NAJMOCNIEJSZE STRONY:</h1>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>zaradność i przebiegłość</button>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>przyjaźń i równość</button>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>odwaga i męstwo</button>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>inteligencja i bystrość</button>
                            </div>
                        </div>
                    )
                } else if (step===3) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>KTÓRY Z TYCH PRZEDMIOTÓW NAJBARDZIEJ CHCIAŁBYŚ POSIADAĆ?</h1>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>czarna różdżka</button>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>zmieniacz czasu</button>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>miecz gryffindora</button>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>wygaszacz</button>
                            </div>
                        </div>
                    )
                } else if (step===4) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>KIM CHCIAŁBYŚ ZOSTAĆ W PRZYSZŁOŚCI?</h1>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>najpotężniejszym czarnoksiężnikiem</button>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>aurorem</button>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>ministrem magii</button>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>śmierciożercą</button>
                            </div>
                        </div>
                    )
                } else if (step===5) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>GDYBYŚ MIAŁ CZARNĄ RÓŻDŻKĘ, UŻYŁBYŚ JEJ DO:</h1>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>czynienia dobra</button>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>zdobycia władzy</button>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>zdobycia wielu zwolenników</button>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>ratowania życia innych ludzi</button>
                            </div>
                        </div>
                    )
                } else if (step===6) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>KTÓREGO Z PONIŻSZYCH OKREŚLEŃ NIE ZNOSISZ W ODNIESIENIU DO SWOJEJ OSOBY?</h1>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>ignorant</button>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>tchórz</button>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>przeciętniak</button>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>samolubny</button>
                            </div>
                        </div>
                    )
                } else if (step===7) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>JEŚLI MÓGŁBYŚ STWORZYĆ ELIKSIR, KTÓRY DA CI JEDNĄ Z PONIŻSZYCH RZECZY, TO CO BY TO BYŁO?</h1>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>siła</button>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>mądrość</button>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>miłość</button>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>chwała</button>
                            </div>
                        </div>
                    )
                } else if (step===8) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>AMORTENCJA JEST ELIKSIREM, KTÓRY PRZYCIĄGA INNE OSOBY. JAKI ZAPACH BY CIĘ ZWABIŁ?</h1>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>pergaminu</button>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>domu</button>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>morza</button>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>ogniska</button>
                            </div>
                        </div>
                    )
                } else if (step===9) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>TWOJA ULUBIONA LEKCJA W HOGWARCIE, TO:</h1>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>transmutacja</button>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>historia magii</button>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>jak opiekować się magicznymi zwięrzętami</button>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>zaklęć i uroków</button>
                            </div>
                        </div>
                    )
                } else if (step===10) {
                    return (
                        <div className="test-head">
                            <div className="test-body">
                                <h1>JAKA JEST TWOJA ULUBIONA RELIKWIA?</h1>
                                <button onClick={() => {setGryffindor(gryffindor + 1); handleStep()}}>miecz</button>
                                <button onClick={() => {setSlytherin(slytherin + 1); handleStep()}}>medialion</button>
                                <button onClick={() => {setRavenclaw(ravenclaw + 1); handleStep()}}>diadem</button>
                                <button onClick={() => {setHufflepuff(hufflepuff + 1); handleStep()}}>puchar</button>
                            </div>
                        </div>
                    )
                } else {
                    return (
                    <div>

                        {(() => {
                            if (slytherin>gryffindor && slytherin>ravenclaw && slytherin>hufflepuff) {
                                return (
                                    <div className="test-head-houses">
                                        <div className="score">
                                            <p>Twój dom to:</p>
                                            <h1>SLYTHERIN!</h1>
                                            <img src={slytherineImage} alt=""/>
                                            <h2>"A jeśli chcecie zdobyć <br />
                                                Druhów gotowych na wiele, <br />
                                                To czeka was Slytherin, <br />
                                                Gdzie cenią sobie fortele."</h2>
                                        </div>
                                    </div>
                                )
                            } else if (gryffindor>slytherin && gryffindor>ravenclaw && gryffindor>hufflepuff) {
                                return (
                                    <div className="test-head-houses">
                                        <div className="score">
                                            <p>Twój dom to:</p>
                                            <h1>GRYFFINDOR!</h1>
                                            <img src={gryffindorImage} alt=""/>
                                            <h2>
                                            "Może w Gryffindorze, <br />
                                            Gdzie kwitnie męstwa cnota, <br />
                                            Gdzie króluje odwaga <br />
                                            I do wyczynów ochota." 
                                            </h2>
                                        </div>
                                    </div>
                                )
                            } else if (ravenclaw>slytherin && ravenclaw>hufflepuff && ravenclaw>gryffindor) {
                                return (
                                    <div className="test-head-houses">
                                        <div className="score">
                                            <p>Twój dom to:</p>
                                            <h1>RAVENCLAW!</h1>
                                            <img src={ravenclawImage} alt=""/>
                                            <h2>
                                            "A może w Ravenclawie <br />
                                            Zamieszkać wam wypadnie <br />
                                            Tam płonie lampa wiedzy, <br />
                                            Tam mędrcem będziesz snadnie."
                                            </h2>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="test-head-houses">
                                        <div className="score">
                                            <p>Twój dom to:</p>
                                            <h1>HUFFLEPUFF!</h1>
                                            <img src={hufflepuffImage} alt=""/>
                                            <h2>
                                            "A może w Hufflepuffie, <br />
                                            gdzie sami prawi mieszkają, <br />
                                            gdzie wierni i sprawiedliwi <br />
                                            Hogwartu szkoły są chwałą."
                                            </h2>
                                        </div>
                                    </div>
                                )
                            }
                        })()}
                    </div>
                    )
                }
            })()}

        </div>
    )
}

export default Test
