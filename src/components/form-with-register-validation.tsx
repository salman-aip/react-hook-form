"use client";

import React, { useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

export default function FormWithRegisterValidation() {
  const [isClient, setIsClient] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  //   console.log(errors);

  return (
    <>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          type="text"
          placeholder="First name"
          {...register("FirstName", {
            required: {
              value: true,
              message: "First name is required",
            },
            maxLength: 80,
          })}
          className="inputClass"
        />

        <input
          type="text"
          placeholder="Last name"
          {...register("LastName", {
            required: "Last name is required",
            maxLength: 100,
          })}
          className="inputClass"
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className="inputClass"
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("MobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          className="inputClass"
        />
        <select
          {...register("Title", { required: true })}
          className="inputClass"
        >
          <option value="" defaultValue="">
            Select Title
          </option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <fieldset className="flex gap-x-6">
          <legend>Developer</legend>
          <div className="flex gap-x-2">
            <input
              {...register("Developer", { required: true })}
              type="radio"
              value="Yes"
            />
            <label>Yes</label>
          </div>
          <div className="flex gap-x-2">
            <input
              {...register("Developer", { required: true })}
              type="radio"
              value="No"
            />
            <label>No</label>
          </div>
        </fieldset>

        <input
          type="submit"
          className="inputClass mt-4 !bg-green-700 text-white"
        />
      </form>

      {isClient && <DevTool control={control} />}
    </>
  );
}
