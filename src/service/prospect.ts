"use server";
import { actionClient } from "@/lib/mongo";
import { ProspectInterface, ProspectlModel } from "@/schema/prospect";
import { revalidateTag } from "next/cache";

export const createProspect = actionClient(
  async <T>(prevState: T, data: FormData) => {
    try {
      const customer = data.get("customer");
      const address = data.get("address");
      const phone = data.get("phone");
      const source = data.get("source");
      const description = data.get("description");

      await new ProspectlModel({
        customer: customer,
        address: address,
        phone: phone,
        source: source,
        description: description,
        createdAt: new Date().toISOString(),
        createdBy: "System",
      }).save();

      revalidateTag("prospects");

      return {
        message: "Success Create Prospect",
        codeName: "SUCCESS",
      };
    } catch (error) {
      return {
        error: JSON.stringify(error, null, 2),
        message: "Internal Server Error",
        codeName: "INTERNAL_SERVER_ERROR",
      };
    }
  }
);

export const getProspectById = actionClient(async (id: string) => {
  try {
    const prospect = await ProspectlModel.findById(id);

    return prospect;
  } catch (error) {
    return {
      message: "Internal Server Error",
      codeName: "INTERNAL_SERVER_ERROR",
    };
  }
});

export const updateProspect = actionClient(
  async (prevState: ProspectInterface, data: FormData) => {
    try {
      const customer = data.get("customer");
      const address = data.get("address");
      const phone = data.get("phone");
      const source = data.get("source");
      const description = data.get("description");

      await ProspectlModel.findByIdAndUpdate(prevState?._id, {
        customer: customer,
        address: address,
        phone: phone,
        source: source,
        description: description,
        createdAt: new Date().toISOString(),
        createdBy: "System",
      });

      revalidateTag("prospects");

      return {
        message: "Success Create Prospect",
        codeName: "SUCCESS",
      };
    } catch (error) {
      return {
        message: "Internal Server Error",
        codeName: "INTERNAL_SERVER_ERROR",
      };
    }
  }
);

export const deleteProspect = actionClient(async (id: string) => {
  try {
    console.log(id);
    // const isExist = await ProspectlModel.findById(id);

    // revalidateTag("prospects");

    // return {
    //   message: "Success Create Prospect",
    //   codeName: "SUCCESS",
    // };
  } catch (error) {
    return {
      error: JSON.stringify(error, null, 2),
      message: "Internal Server Error",
      codeName: "INTERNAL_SERVER_ERROR",
    };
  }
});
