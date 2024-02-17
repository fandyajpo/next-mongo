"use client";
import { useFormState } from "react-dom";
import Button from "../architect/Button";
import { createProspect, updateProspect } from "@/service/prospect";
import { ProspectInterface } from "@/schema/prospect";
import { FormResponse, Method } from "@/types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
interface Props {
  method?: Method;
  data?: ProspectInterface;
}

const ProspectForm = (props: Props) => {
  const router = useRouter();
  const [formState, formAction] = useFormState<
    ProspectInterface & FormResponse
  >(
    props.method === "CREATE" ? createProspect : updateProspect,
    props.method === "CREATE"
      ? {
          customer: "",
          address: "",
          phone: "",
          source: "",
          description: "",
          message: "",
          codeName: "",
        }
      : { ...props?.data }
  );

  useEffect(() => {
    if (formState.codeName === "SUCCESS") {
      router.back();
    }
  }, [formState?.codeName]);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          required
          defaultValue={formState?.customer}
          name="customer"
          className="w-full rounded-lg border border-gray-200 p-3 text-sm"
          placeholder="Name"
          type="text"
          id="name"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="email">
            Address
          </label>
          <input
            defaultValue={formState?.address}
            name="address"
            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
            placeholder="Customer Address"
            type="text"
            id="address"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="phone">
            Phone
          </label>
          <input
            defaultValue={formState?.phone}
            name="phone"
            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
            placeholder="Phone Number"
            type="tel"
            id="phone"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-5">
        <div>
          <label
            htmlFor="Option1"
            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
          >
            <input
              value={"Walk-In"}
              className="sr-only"
              id="Option1"
              type="radio"
              tabIndex={-1}
              name="source"
              defaultChecked={formState?.source === "Walk-In"}
            />

            <span className="text-sm">Walk-In</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="Option2"
            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
          >
            <input
              value={"Flyering"}
              className="sr-only"
              id="Option2"
              type="radio"
              tabIndex={-1}
              name="source"
              defaultChecked={formState?.source === "Flyering"}
            />

            <span className="text-sm">Flyering</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="Option3"
            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
          >
            <input
              value={"Event"}
              className="sr-only"
              id="Option3"
              type="radio"
              tabIndex={-1}
              name="source"
              defaultChecked={formState?.source === "Event"}
            />

            <span className="text-sm">Event</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="Option4"
            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
          >
            <input
              value={"Medsos"}
              className="sr-only"
              id="Option4"
              type="radio"
              tabIndex={-1}
              name="source"
              defaultChecked={formState?.source === "Medsos"}
            />

            <span className="text-sm">Medsos</span>
          </label>
        </div>
        <div>
          <label
            htmlFor="Option5"
            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
          >
            <input
              value={"Referensi"}
              className="sr-only"
              id="Option5"
              type="radio"
              tabIndex={-1}
              name="source"
              defaultChecked={formState?.source === "Referensi"}
            />

            <span className="text-sm">Referensi</span>
          </label>
        </div>
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          Message
        </label>

        <textarea
          defaultValue={formState?.description}
          name="description"
          className="w-full rounded-lg border border-gray-200 p-3 text-sm"
          placeholder="Message"
          rows={8}
          id="message"
        ></textarea>
      </div>

      <div className="mt-4">
        <Button
          title={props.method === "CREATE" ? "Save New" : "Save Changes"}
          type="submit"
          className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
        />
      </div>
    </form>
  );
};

export default ProspectForm;
