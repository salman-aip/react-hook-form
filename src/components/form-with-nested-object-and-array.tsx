"use client";

import React, { useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

type IFormData = {
  FirstName: string;
  LastName: string;
  Email: string;
  MobileNumber: string[];
  Title: string;
  Developer: string;
  Address: {
    City: string;
    Country: string;
  };
};

export default function FormWithNestedObjectAndArray() {
  const [isClient, setIsClient] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormData>({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      MobileNumber: ["", ""],
      Title: "",
      Developer: "",
      Address: {
        City: "",
        Country: "",
      },
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = (data: IFormData) => {
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
        {errors.FirstName && (
          <p className="errorMessage">{errors.FirstName?.message}</p>
        )}

        <input
          type="text"
          placeholder="Last name"
          {...register("LastName", {
            required: "Last name is required",
            maxLength: 100,
          })}
          className="inputClass"
        />
        {errors.LastName && (
          <p className="errorMessage">{errors.LastName?.message}</p>
        )}

        <input
          type="text"
          placeholder="Email"
          {...register("Email", {
            required: "Email is required",
            pattern: /^\S+@\S+$/i,
          })}
          className="inputClass"
        />
        {errors.Email && (
          <p className="errorMessage">{errors.Email?.message}</p>
        )}

        {/* array fields register */}
        <input
          type="tel"
          placeholder="Primary Mobile number"
          {...register("MobileNumber.0", {
            required: "Phone number is required",
            minLength: 6,
            maxLength: 12,
          })}
          className="inputClass"
        />
        {errors.MobileNumber?.[0] && (
          <p className="errorMessage">{errors.MobileNumber?.[0].message}</p>
        )}

        <input
          type="tel"
          placeholder="Secondary Mobile number"
          {...register("MobileNumber.1", {
            required: "Phone number is required",
            minLength: 6,
            maxLength: 12,
          })}
          className="inputClass"
        />
        {errors.MobileNumber?.[1] && (
          <p className="errorMessage">{errors.MobileNumber?.[1].message}</p>
        )}

        <select
          {...register("Title", { required: "Title is required" })}
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
        {errors.Title && (
          <p className="errorMessage">{errors.Title?.message}</p>
        )}

        <fieldset className="flex gap-x-6">
          <legend>Developer</legend>
          <div className="flex gap-x-2">
            <input
              {...register("Developer", { required: "Select any of one" })}
              type="radio"
              value="Yes"
            />
            <label>Yes</label>
          </div>
          <div className="flex gap-x-2">
            <input
              {...register("Developer", { required: "Select any of one" })}
              type="radio"
              value="No"
            />
            <label>No</label>
          </div>
        </fieldset>
        {errors.Developer && (
          <p className="errorMessage">{errors.Developer?.message}</p>
        )}

        {/* nested object register*/}
        <input
          type="text"
          placeholder="City"
          {...register("Address.City", {
            required: {
              value: true,
              message: "City name is required",
            },
            maxLength: 80,
          })}
          className="inputClass"
        />
        {errors.Address?.City && (
          <p className="errorMessage">{errors.Address.City?.message}</p>
        )}

        <input
          type="text"
          placeholder="Country"
          {...register("Address.Country", {
            required: "Country name is required",
            maxLength: 100,
          })}
          className="inputClass"
        />
        {errors.Address?.Country && (
          <p className="errorMessage">{errors.Address.Country?.message}</p>
        )}

        <input
          type="submit"
          className="inputClass mt-4 !bg-green-700 text-white"
        />
      </form>

      {isClient && <DevTool control={control} />}
    </>
  );
}
