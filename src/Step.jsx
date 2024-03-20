import { useEffect, useState } from 'react';
import './Step.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const Step = () => {
  useEffect(() => {
    document.title = 'Step';
  });
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  const handlePrev = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    <div>
      <button onClick={() => setIsOpen((o) => !o)} className='close'>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <button
              onClick={handlePrev}
              style={{
                backgroundColor: '#7950f2',
                color: '#fff',
                cursor: step === 1 && 'not-allowed',
              }}>
              Prev
            </button>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: '#7950f2',
                color: '#fff',
                cursor: step === 3 && 'not-allowed',
              }}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step;
