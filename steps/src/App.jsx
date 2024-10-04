import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (currentStep < messages.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  function handlePrev() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={currentStep === 0 ? "active" : ""}>1</div>
            <div className={currentStep === 1 ? "active" : ""}>2</div>
            <div className={currentStep === 2 ? "active" : ""}>3</div>
          </div>
          <p className="message">{messages[currentStep]}</p>
          <div className="buttons">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              style={{
                backgroundColor: currentStep === 0 ? "#ccc" : "#7900f2",
              }}
            >
              <span>◀</span> Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === messages.length - 1}
              style={{
                backgroundColor:
                  currentStep === messages.length - 1 ? "#ccc" : "#7900f2",
              }}
            >
              Next <span>▶</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
