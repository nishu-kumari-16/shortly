import { useEffect, useState } from "react";
import Button from "./Button";

const Summary = ({ onStepSubmit, formValue }: any) => {
  const [total, setTotal] = useState<number>(0);

  const onConfirm = () => {
    onStepSubmit({}, 4);
  };

  const priceSuffix = formValue?.[2]?.planType === "Monthly" ? "/mo" : "/yr";
  const totalSuffix = formValue?.[2]?.planType === "Monthly" ? "month" : "year";

  useEffect(() => {
    if (formValue) {
      const sum = formValue?.[3]?.reduce((accumulator: number, object: any) => {
        return accumulator + object.pricing;
      }, 0);
      setTotal(formValue?.[2]?.plan.price + sum);
    }
  }, [formValue]);

  return (
    <div className="flex flex-col gap-8 flex-1 px-[4rem] p-2">
      <div className="flex flex-col">
        <div className="text-marineBlue text-[2rem] font-extrabold">
          Finishing up
        </div>
        <div className="text-coolGray">
          Double-check everything looks OK before confirming
        </div>
      </div>
      <div className="flex gap-3"></div>

      <div className="flex flex-col bg-alabaster rounded-md p-6">
        <div className="flex justify-between items-center pb-4 border-b-[1px] border-lightGray">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-marineBlue font-medium">
              {`${formValue?.[2]?.plan?.name} (${formValue?.[2]?.planType})`}
            </div>
            <div className="text-xs text-coolGray underline hover:cursor-pointer hover:text-purplishBlue">
              Change
            </div>
          </div>
          <div className="text-sm text-marineBlue font-medium">
            ${formValue?.[2]?.plan.price}
            {priceSuffix}
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          {formValue?.[3]?.map((data: any, index: any) => (
            <div className="flex justify-between" key={index}>
              <div className="text-xs text-coolGray">{data?.name}</div>
              <div className="text-xs text-[#000]">
                ${data.pricing}
                {priceSuffix}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between p-6">
        <div className="text-xs text-coolGray">
          Total {`(per ${totalSuffix})`}
        </div>
        <div className="text-xs text-[#000]">
          ${total}
          {priceSuffix}
        </div>
      </div>

      <div className="flex justify-between items-end flex-1">
        <Button
          onClick={() => {
            onStepSubmit(null, 2);
          }}
          variant="text"
        >
          Go Back
        </Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </div>
    </div>
  );
};
export default Summary;
