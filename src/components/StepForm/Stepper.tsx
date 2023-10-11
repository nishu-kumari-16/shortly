const Stepper = ({ steps, activeStep }: any) => {
  return steps?.map((step: any, index: number) => (
    <div className="flex gap-3 z-10 items-center" key={index}>
      <div
        className={`rounded-[50%] p-2 border-white w-[2rem] text-sm font-medium border h-[2rem] flex items-center justify-center text-white ${
          activeStep === index && "bg-lightBlue !text-marineBlue border-none"
        } `}
      >
        {index + 1}
      </div>
      <div className="flex flex-col">
        <div className="text-lightGray text-xs"> STEP {index + 1}</div>
        <div className="text-white text-sm">{step?.name}</div>
      </div>
    </div>
  ));
};
export default Stepper;
