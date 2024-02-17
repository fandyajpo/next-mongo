"use client";
import { useFormState } from "react-dom";
import { register } from "@/service/auth";
import Button from "@/components/architect/Button";
import { FormResponse } from "@/types";
const LoginForm = () => {
  const [formState, formAction] = useFormState<FormResponse>(register, {
    message: "",
    codeName: "",
  });

  return (
    <form action={formAction} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 ">
        {formState?.message ? (
          <p className="text-red-500 rounded text-sm font-semibold animate-pulse bg-red-500/10 border border-red-500 p-2 my-2">
            {formState?.message}
          </p>
        ) : null}
        <label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          required
          id="Username"
          name="username"
          placeholder="Username"
          className="mt-1 px-2 w-full h-12 border rounded border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="Password"
          required
          name="password"
          placeholder="Password"
          className="mt-1 px-2 w-full h-12 border rounded border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          By having an account, you agree to our{" "}
          <a href="#" className="text-gray-700 underline">
            terms and conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-700 underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <Button
          title="Register"
          type="submit"
          className="inline-block shrink-0 rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        />
      </div>
    </form>
  );
};
export default LoginForm;
