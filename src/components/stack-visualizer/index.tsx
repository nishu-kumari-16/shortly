import { useState } from "react";
import StackBar from "./StackBar";
import "./index.style.scss";

const StackVisualizer = () => {
  const [stackData, setStackData] = useState<string[]>([]);

  const [currentData, setCurrentData] = useState<string>();
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onPush = () => {
    currentData
      ? setStackData([currentData, ...stackData])
      : setError("Please enter value to push");
    setMessage("");
  };

  const onPop = () => {
    stackData.length
      ? setStackData(stackData.splice(1))
      : setMessage("Stack Underflow");
  };

  const onValueChange = (event: any) => {
    setCurrentData(event?.target.value);
    setError("");
  };

  return (
    <div className="flex h-full justify-center items-center ">
      <div className="container">
        <div className="flex flex-col gap-4 flex-1 items-center">
          <StackBar stackData={stackData} />
          {message && (
            <div className="border-2 rounded-md p-3 text-lg border-red-600 text-red-600 w-fit">
              {message}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <input
            type="number"
            value={currentData}
            className="rounded-md p-2 outline-none border-2 border-cyan-600"
            onChange={onValueChange}
          />
          {error && <div className="text-sm text-red-600 w-fit">{error}</div>}
          <button
            onClick={onPush}
            className="bg-[#618df3] text-white py-2 rounded-md"
          >
            Push
          </button>
          <button
            onClick={onPop}
            className="bg-[#618df3] text-white py-2 rounded-md"
          >
            Pop
          </button>
        </div>
      </div>
    </div>
  );
};
export default StackVisualizer;
