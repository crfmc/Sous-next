import React, { useState } from "react"


export default function Stepper() {
    const [step, setStep] = useState(0);

    function handleClick(e : React.MouseEvent) {
        e.preventDefault();
        console.log('clicked', e);
        // switch (e.target.)
    }

    return (
        <div className="stepper-container">

            <ol className="stepper-text" start={0} dir="ltr">
                <div className="stepper-overlay top"></div>
                <li data-step={0} className="stepper-text-block focused"><p>Prepare the materials.</p></li>

                <li data-step={1} className="stepper-text-block"><p>Break the egg into a bowl</p></li>

                <li data-step={2} className="stepper-text-block"><p>Add Salt</p></li>

                <li data-step={3} className="stepper-text-block"><p>Add Pepper</p></li>

                <li data-step={4} className="stepper-text-block"><p>Whisk ingredients in bowl</p></li>
                <div className="stepper-overlay bottom"></div>
            </ol>

            
            <div className="stepper-controls">
                {/* Make links accessible */}
                <a 
                    onClick={ (e) => handleClick(e) }
                    className="stepper-controls-link prevStep"
                    >
                        <span className="stepper-controls-link-text prevStep-text">Previous</span>
                </a>
                <a 
                    onClick={ (e) => handleClick(e) } 
                    className="stepper-controls-link nextStep"
                >
                    <span className="stepper-controls-link-text prevStep-text">Next</span>
                </a>
            </div>
        </div>
    )
}