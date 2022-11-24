import { useState } from "react"


export default function Stepper() {
    const [step, setStep] = useState(0);

    return (
        <div className="stepper-container">
            {/* <div className="stepper-overlay top"></div>
            <div className="stepper-overlay bottom"></div> */}
            {/* MUST TURN THIS INTO UL FOR ACCESSIBILITY */}
            <ol className="stepper-text" dir="ltr">
                <li className="stepper-text-block"><p>Step 0: Prepare the materials.</p></li>

                <li className="stepper-text-block"><p>Step 1: Break the egg into a bowl</p></li>

                <li className="stepper-text-block"><p>Step 2: Add Salt</p></li>

                <li className="stepper-text-block"><p>Step 3: Add Pepper</p></li>

                <li className="stepper-text-block"><p>Step 4: Whisk ingredients in bowl</p></li>
            </ol>

            <div className="stepper-controls">
                <a href="#">Next</a>
            </div>
        </div>
    )
}