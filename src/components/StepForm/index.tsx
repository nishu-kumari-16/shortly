import Stepper from "./Stepper";
import SidebarImage from "../../assets/step-form/bg-sidebar-desktop.svg";
import Thanks from "../../assets/step-form/icon-thank-you.svg";
import { useState } from "react";
import YourInfo from "./YourInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";

const StepForm = () => {
  const [formData, setFormData] = useState<any>({});
  const [activeStep, setActiveStep] = useState<number>(0);

  const onStepSubmit = (data: any, step: number) => {
    !!data && setFormData((prevState: any) => ({ ...prevState, [step]: data }));
    setActiveStep(step);
  };

  const steps = [
    {
      name: "YOUR INFO",
      component: (
        <YourInfo
          onStepSubmit={onStepSubmit}
          formValue={formData?.[activeStep + 1]}
        />
      ),
    },
    {
      name: "SELECT PLAN",
      component: (
        <SelectPlan
          onStepSubmit={onStepSubmit}
          formValue={formData?.[activeStep + 1]}
        />
      ),
    },
    {
      name: "ADD ONS",
      component: (
        <AddOns
          onStepSubmit={onStepSubmit}
          formValue={formData?.[activeStep + 1]}
          planType={formData?.[2]?.planType}
        />
      ),
    },
    {
      name: "SUMMARY",
      component: <Summary onStepSubmit={onStepSubmit} formValue={formData} />,
    },
  ];

  return (
    <div className="bg-lightBlue flex justify-center items-center flex-1 h-full">
      <div className="flex p-4 rounded-md bg-white min-h-[33.25rem] p-auto m-2">
        <div className="flex flex-col gap-6 p-8 relative min-w-[15rem]">
          <img
            src={SidebarImage}
            alt="img"
            className="absolute top-0 left-0 right-0 bottom-0"
          />
          <Stepper activeStep={activeStep} steps={steps} />
        </div>

        {activeStep <= 3 ? (
          steps[activeStep].component
        ) : (
          <div className="flex flex-col gap-4 justify-center items-center max-w-[30rem] px-[4rem] p-2">
            <img src={Thanks} alt="img" className="w-fit" />
            <div className="text-[2rem] font-extrabold text-marineBlue">
              Thank You
            </div>
            <div className="text-xs font-medium text-coolGray text-center">
              Thanks for confirming your subscription! IWe hope you have fun
              using our platform. If you ever need support, please feel free to
              mail us at support@example.com
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default StepForm;
