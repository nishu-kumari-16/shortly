const StackBar = ({ stackData }: any) => {
  return (
    <div className="border-2 border-[#000] border-t-0 min-h-[25rem] min-w-[8rem] flex flex-col items-center justify-end">
      {stackData?.map((value: number, index: number) => (
        <div
          className="flex border bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full justify-center py-2 "
          key={index}
        >
          <div className="text-md">{value}</div>
        </div>
      ))}
    </div>
  );
};

export default StackBar;
