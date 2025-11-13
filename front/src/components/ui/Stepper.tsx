import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index <= currentStep ? "active" : ""}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
