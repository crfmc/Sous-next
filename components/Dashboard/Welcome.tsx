import { z } from 'zod';


const WelcomeProps = z.object({
  showWelcome: z.function().args(z.boolean()).returns(z.void()),
});

type WelcomeProps = z.infer<typeof WelcomeProps>;

export const Welcome = ({ showWelcome } : WelcomeProps) => { 
  return (
    <div className="welcome">
      <div className="welcome-container">
        <div className="welcome-container-content">
          <div className="welcome-container-content-text">
            <h1>Hi there! Welcome to Sous.</h1>
            <span onClick={() => showWelcome(false)}>Let's get started.</span>
          </div>
        </div>
      </div>
    </div>
  )
}