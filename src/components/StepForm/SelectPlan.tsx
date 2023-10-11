import Button from "./Button";
import Arcade from "../../assets/step-form/icon-arcade.svg";
import Advanced from "../../assets/step-form/icon-advanced.svg";
import Pro from "../../assets/step-form/icon-pro.svg";
import { useEffect, useState } from "react";
import ToggleSwitch from "../switch";

const getBillingData = (planType: string = "Monthly") => [
  {
    id: 1,
    name: "Arcade",
    icon: Arcade,
    price: planType === "Monthly" ? 9 : 90,
  },
  {
    id: 2,
    name: "Advanced",
    icon: Advanced,
    price: planType === "Monthly" ? 12 : 120,
  },
  { id: 3, name: "Pro", icon: Pro, price: planType === "Monthly" ? 15 : 150 },
];

const BillingCard = ({ billingData, active, onClick, planType }: any) => {
  const { icon, name, price } = billingData;
  return (
    <div
      className={`flex flex-col p-4 flex-1 gap-6 min-w-[8rem] rounded-lg border border-lightGray ${
        active && "!bg-lightBlue !border-marineBlue"
      } hover:cursor-pointer hover:bg-alabaster hover:border-marineBlue`}
      onClick={onClick}
    >
      <img src={icon} alt="icon" className="flex w-fit " />
      <div className="flex flex-1 flex-col gap-1 justify-end">
        <div className="text-sm text-marineBlue font-medium">{name}</div>
        <div className="text-xs text-coolGray">
          ${price}
          {planType === "Monthly" ? "/mo" : "/yr"}
        </div>
        {planType !== "Monthly" && (
          <div className="text-xs text-marineBlue">2 months free</div>
        )}
      </div>
    </div>
  );
};

const SelectPlan = ({ onStepSubmit, formValue }: any) => {
  const [planType, setPlanType] = useState<string>("Monthly");
  const [selectedData, setSelectedData] = useState<any>(getBillingData()[0]);

  const onCardClick = (data: any) => {
    setSelectedData(data);
  };

  const onNextClick = () => {
    onStepSubmit({ plan: selectedData, planType }, 2);
  };

  useEffect(() => {
    if (formValue) {
      setSelectedData(formValue.plan);
      setPlanType(formValue.planType);
    }
  }, [formValue]);

  return (
    <div className="flex flex-col gap-8 flex-1 px-[4rem] p-2">
      <div className="flex flex-col">
        <div className="text-marineBlue text-[2rem] font-extrabold">
          Select Plan
        </div>
        <div className="text-coolGray">
          You have option of monthly and yearly billing
        </div>
      </div>
      <div className="flex gap-3">
        {getBillingData(planType).map((data, index) => (
          <BillingCard
            billingData={data}
            key={index}
            active={selectedData.id - 1 === index}
            onClick={() => onCardClick(data)}
            planType={planType}
          />
        ))}
      </div>

      <div className="flex w-full py-3 gap-2 rounded-lg bg-magnolia justify-center  items-center">
        <div
          className={`text-md ${
            planType === "Monthly" && "text-marineBlue font-medium"
          }`}
        >
          Monthly
        </div>
        <ToggleSwitch
          id="newsletter"
          checked={planType === "Yearly"}
          small
          onChange={(value: any) =>
            value ? setPlanType("Yearly") : setPlanType("Monthly")
          }
        />
        <div
          className={`text-md ${
            planType === "Yearly" && "text-marineBlue font-medium"
          }`}
        >
          Yearly
        </div>
      </div>

      <div className="flex justify-between items-end flex-1">
        <Button
          onClick={() => {
            onStepSubmit(null, 0);
          }}
          variant="text"
        >
          Go Back
        </Button>
        <Button onClick={onNextClick}>Next Step</Button>
      </div>
    </div>
  );
};
export default SelectPlan;
