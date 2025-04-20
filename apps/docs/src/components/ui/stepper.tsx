import { useState } from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type Step = {
  title: string;
  content: string;
  code?: string; // Optional code block content
  items?: { name: string; href: string }[]; // Array of objects with 'name' and 'href' properties
};

type StepperProps = {
  steps: Step[];
};

export function Stepper({ steps }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const isLast = currentStep === steps.length - 1;
  const isFirst = currentStep === 0;

  const handleNextStep = () => {
    if (!isLast) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBackStep = () => {
    if (!isFirst) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const { content, code, items } = steps[currentStep];

  return (
    <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6">
      <div className="flex md:flex-col gap-4 w-full md:w-1/3">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 text-left text-sm md:text-base px-4 py-2 rounded-lg transition-all 
            ${index === currentStep ? "bg-white/10 text-white font-semibold" : "hover:bg-white/5 text-slate-300"}`}
            onClick={() => setCurrentStep(index)}
          >
            {index <= currentStep ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <div className="h-4 w-4 rounded-full border border-white flex items-center justify-center text-xs">{index + 1}</div>
            )}
            {step.title}
          </button>
        ))}
      </div>

      <Card className="w-auto bg-white/5 border-white/10 text-white">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">{steps[currentStep].title}</h2>

          {code ? (
            <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
              <code>{code}</code>
            </pre>
          ) : (
            <p className="text-slate-300 mb-6">{content}</p>
          )}

          {/* Display list of items with anchor links */}
          {items && (
            <ul className="text-slate-300 mb-6">
              {items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-blue-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex justify-between">
            <Button className="cursor-pointer" variant="ghost" onClick={handleBackStep} disabled={isFirst}>
              Back
            </Button>
            <Button className="cursor-pointer" onClick={handleNextStep} disabled={isLast}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
