import { JSX, useState } from "react";

interface StepperPropsTypes {
  stepsConfig: { name: string; component: () => JSX.Element }[];
}

function Stepper({ stepsConfig }: StepperPropsTypes) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!stepsConfig.length) return null;

  const totalSteps = stepsConfig.length;
  const intervals = totalSteps - 1;
  const progressFraction = intervals === 0 ? 0 : (currentStep - 1) / intervals;
  const nextStepHandler = () => {
    setCurrentStep((prev) => {
      if (prev === totalSteps) {
        setIsCompleted(true);
        return prev;
      }
      return prev + 1;
    });
  };
  const ActiveComponent = stepsConfig[currentStep - 1]?.component;

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 p-4 rounded-2xl  bg-gradient-to-r from-slate-300 to-slate-500 shadow-2xl">
      <div className="relative flex items-center justify-between">
        <div
          className="absolute top-1/3 -translate-y-1/2 bg-gray-300 h-1"
          style={{
            left: "1rem",
            right: "1rem",
            zIndex: 0,
          }}
        ></div>
        <div
          className="absolute top-1/3 -translate-y-1/2 bg-green-600 h-1 transition-all duration-200 ease-in-out"
          style={{
            left: "1rem",
            width: `calc((100% - 2rem) * ${progressFraction})`,
            zIndex: 0,
          }}
        ></div>
        {stepsConfig.map((step, index) => {
          const stepIndex = index + 1;
          const isStepCompleted = currentStep > stepIndex || isCompleted;
          const isStepActive = currentStep === stepIndex;

          return (
            <div key={step.name} className="relative z-10 flex flex-col items-center text-neutral-100">
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full mb-1
                  text-base font-semibold
                  ${isStepCompleted ? "bg-green-600 text-white" : isStepActive ? "bg-blue-600 text-white" : "bg-gray-400 text-neutral-100"}
                `}
              >
                {isStepCompleted ? "✓" : stepIndex}
              </div>
              <div className="text-xs sm:text-sm font-medium">{step.name}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 mb-4 text-center">{ActiveComponent && <ActiveComponent />}</div>
      {!isCompleted && (
        <button onClick={nextStepHandler} className="cursor-pointer px-2 py-1.5 w-24 sm:px-4 sm:py-2 sm:w-32 rounded-xl bg-green-600 text-white font-bold text-xl mx-auto block">
          {currentStep === totalSteps ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}

export { Stepper };
