
import { z } from 'zod';
import { useState } from 'react';

// const WelcomeProps = z.object({
//   showWelcome: z.function().args(z.boolean()).returns(z.void()),
// });

// type WelcomeProps = z.infer<typeof WelcomeProps>;

export const Welcome = () => {
  const [welcome, showWelcome] = useState(true);

  return welcome ? (
    <div className="welcome">
      <div className="welcome-container">
        <div className="welcome-container-content">
          <div className="welcome-container-content-text">
            <h1>Hi there! I'm Sous.</h1>
            <span onClick={() => showWelcome(false)}>Let's get started.</span>
          </div>
        </div>
      </div>
    </div>
  ) : null
}