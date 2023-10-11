const Button = ({
  children,
  onClick,
  customStyle,
  variant,
  ...otherProps
}: any) => {
  return (
    <button
      onClick={onClick}
      {...otherProps}
      className={`bg-marineBlue text-white rounded-lg h-[3rem] w-fit min-w-[8rem] hover:opacity-[0.8] ${
        variant === "text" && "!bg-white !text-marineBlue !min-w-0"
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
