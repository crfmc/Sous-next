import { useState } from "react"


export default function Stepper() {
    const [step, setStep] = useState(0);

    return (
        <div className="stepper-container">
            {/* <div className="stepper-overlay top"></div>
            <div className="stepper-overlay bottom"></div> */}
            {/* MUST TURN THIS INTO UL FOR ACCESSIBILITY */}
            <div className="stepper-text" dir="ltr">
                <div className="stepper-text-block">Step 0: Prepare the materials.</div>

                <div className="stepper-text-block">Step 1: Break the egg into a bowl</div>

                <div className="stepper-text-block">Step 2: Add Salt</div>

                <div className="stepper-text-block">Step 3: Add Pepper</div>

                <div className="stepper-text-block">Step 4: Whisk ingredients in bowl</div>
            </div>

            <div className="stepper-controls">
                <a href="#">Next</a>
            </div>
        </div>
    )
}