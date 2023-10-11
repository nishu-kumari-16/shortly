import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "./Input";
import Button from "./Button";
import { useEffect } from "react";

const yupSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email("Please enter valid email").required(),
    phone: yup
      .string()
      .max(10, "Please enter valid mobile number")
      .min(10, "Please enter valid mobile number")
      .required(),
  })
  .required();

const YourInfo = ({ onStepSubmit, formValue }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<any>({ resolver: yupResolver(yupSchema), mode: "onChange" });

  const onSubmit: SubmitHandler<any> = (data) => {
    onStepSubmit(data, 1);
  };

  useEffect(() => {
    if (formValue) {
      const { name, phone, email } = formValue;
      setValue("name", name);
      setValue("email", email);
      setValue("phone", phone);
    }
  }, [formValue, setValue]);

  return (
    <div className="flex flex-col gap-8 flex-1 px-[6rem] p-2">
      <div className="flex flex-col">
        <div className="text-marineBlue text-[2rem] font-extrabold">
          Personal Info
        </div>
        <div className="text-coolGray">
          Please provide your name, email address and phone number
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 flex-1"
      >
        <Input
          name="name"
          register={register}
          error={errors.name?.message?.toString()}
          label="Name"
        />
        <Input
          name="email"
          register={register}
          error={errors.email?.message?.toString()}
          label="Email Address"
        />
        <Input
          name="phone"
          type="tel"
          register={register}
          error={errors.phone?.message?.toString()}
          label="Phone Number"
        />
        <div className="flex flex-1 items-end justify-end">
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </div>
  );
};
export default YourInfo;
