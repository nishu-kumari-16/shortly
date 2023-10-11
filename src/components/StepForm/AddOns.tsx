import { useEffect, useState } from "react";
import Button from "./Button";

const getAddOnsData = (planType: string) => {
  return [
    {
      id: 1,
      name: "Online service",
      benefit: "Access to multiple games",
      pricing: planType === "Yearly" ? 10 : 1,
    },
    {
      id: 2,
      name: "Larger Storage",
      benefit: "Extra 1TB of cloud save",
      pricing: planType === "Yearly" ? 20 : 2,
    },
    {
      id: 3,
      name: "Customizable Profit",
      benefit: "Custom theme on your profile",
      pricing: planType === "Yearly" ? 20 : 2,
    },
  ];
};

const Checkbox = ({ checkboxData, onClick, active, planType }: any) => (
  <div
    className={`flex gap-4 items-center p-6 border border-lightGray rounded-lg ${
      active && "bg-magnolia !border-marineBlue"
    } hover:border-marineBlue hover:bg-alabaster hover:cursor-pointer`}
  >
    <input
      type="checkbox"
      className="accent-marineBlue w-4 h-4"
      checked={active}
      onChange={(event: any) => onClick(event.target.checked, checkboxData)}
    />
    <div className="flex flex-col gap-1 flex-1">
      <div className="text-sm font-medium text-marineBlue">
        {checkboxData.name}
      </div>
      <div className="text-xs font-medium text-coolGray">
        {checkboxData.benefit}
      </div>
    </div>
    <div className="flex self-end text-xs  text-purplishBlue">
      +${checkboxData.pricing}
      {planType === "Monthly" ? "/mo" : "/yr"}
    </div>
  </div>
);

const AddOns = ({ onStepSubmit, formValue, planType = "Monthly" }: any) => {
  const [selectedData, setSelectedData] = useState<any[]>([]);

  const onNextClick = () => {
    onStepSubmit(selectedData, 3);
  };

  useEffect(() => {
    if (formValue) {
      setSelectedData(formValue);
    }
  }, [formValue]);

  const handleSelect = (isSelected: boolean, data: any) => {
    if (isSelected) {
      setSelectedData([...selectedData, data]);
    } else {
      setSelectedData(selectedData.filter((value) => data.id !== value.id));
    }
  };

  return (
    <div className="flex flex-col gap-8 flex-1 px-[4rem] p-2">
      <div className="flex flex-col">
        <div className="text-marineBlue text-[2rem] font-extrabold">
          Pick add-ons
        </div>
        <div className="text-coolGray">
          Add-ons helps enhance your gaming experience
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {getAddOnsData(planType)?.map((data, index) => (
          <Checkbox
            checkboxData={data}
            onClick={handleSelect}
            active={selectedData.filter((data) => data.id === index + 1).length}
            planType={planType}
            key={index}
          />
        ))}
      </div>

      <div className="flex justify-between items-end flex-1">
        <Button
          onClick={() => {
            onStepSubmit(null, 1);
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
export default AddOns;
