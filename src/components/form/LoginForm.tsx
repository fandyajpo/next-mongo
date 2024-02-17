"use client";
import { useFormState } from "react-dom";
import { login } from "@/service/auth";
import Button from "@/components/architect/Button";
import { FormResponse } from "@/types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const [formState, formAction] = useFormState<FormResponse>(login, {
    message: "",
    codeName: "",
  });

  useEffect(() => {
    if (formState.codeName === "SUCCESS") {
      router.replace("/");
    }
  }, [formState.codeName]);

  return (
    <form action={formAction} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 ">
        {formState.codeName === "SUCCESS" && formState?.message ? (
          <p className="text-green-500 rounded text-sm font-semibold animate-pulse bg-green-500/10 border border-green-500 p-2 my-2">
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
          Welcome buddy,{" "}
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
          title="Login"
          type="submit"
          className="inline-block shrink-0 rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        />
      </div>
    </form>
  );
};
export default LoginForm;
