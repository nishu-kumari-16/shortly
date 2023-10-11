const Input = ({ error, register, name, label, ...otherProps }: any) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="text-sm">{label}</div>
        {error && <div className="text-strawberryRed text-sm">{error}</div>}
      </div>
      <input
        {...register(name)}
        className={`border border-coolGray outline-none px-4 py-2 rounded-md ${
          error && "!border-strawberryRed"
        }`}
      />
    </div>
  );
};
export default Input;
