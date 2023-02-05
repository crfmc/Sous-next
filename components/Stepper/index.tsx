import React, { useState } from "react"


export default function Stepper() {
    const [step, setStep] = useState(0);

    function handleClickPrev(e : React.MouseEvent) {
        console.log(e.target);
        setStep(step - 1);
    }

    function handleClickNext(e : React.MouseEvent) {
        setStep(step + 1);
    }

    return (
        <div className="stepper-container">

            <ol className="stepper-text" start={0} dir="ltr">
                <div className="stepper-overlay top"></div>
                <li id="0" data-step={0} className="stepper-text-block focused"><p>Prepare the materials.</p></li>

                <li id="1" data-step={1} className="stepper-text-block"><p>Break the egg into a bowl</p></li>

                <li id="2" data-step={2} className="stepper-text-block"><p>Add Salt</p></li>

                <li id="3" data-step={3} className="stepper-text-block"><p>Add Pepper</p></li>

                <li id="4" data-step={4} className="stepper-text-block"><p>Whisk ingredients in bowl</p></li>
                <div className="stepper-overlay bottom"></div>
            </ol>

            
            <div className="stepper-controls">
                {/* Make links accessible */}
                <a 
                    onClick={ (e) => handleClickPrev(e) }
                    href={"" + (step - 1)}
                    className="stepper-controls-link prevStep"
                    >
                        <span className="stepper-controls-link-text prevStep-text">Previous</span>
                </a>
                <a 
                    onClick={ (e) => handleClickNext(e) }
                    href="#1"
                    className="stepper-controls-link nextStep"
                >
                    <span className="stepper-controls-link-text prevStep-text">Next</span>
                </a>
            </div>
        </div>
    )
}