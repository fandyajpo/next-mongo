"use server";
import { cookies } from "next/headers";
import { IronSession, getIronSession } from "iron-session";
import { SaleslModel } from "@/schema/sales";
import { actionClient } from "@/lib/mongo";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { encrypt, ironOption } from "@/lib/session";
export const createAuth = async <T>(payload: T) => {
  const session: IronSession<{ token: T }> = await getIronSession(
    cookies(),
    ironOption
  );
  session.token = payload;
  return await session.save();
};

export const getAuth = async () => {
  const session = await getIronSession(cookies(), ironOption);
  return session;
};

export const register = actionClient(async (data: FormData) => {
  try {
    const username = data.get("username");
    const password = data.get("password") as string;

    const hashPassword = await createHashPassword(password);

    const salesRegister = await new SaleslModel({
      username: username,
      password: hashPassword,
    }).save();

    return console.log(salesRegister);
  } catch (error) {
    throw error;
  }
});

export const login = actionClient(async <T>(prevState: T, data: FormData) => {
  try {
    const username = data.get("username") as string;
    const password = data.get("password") as string;

    const salesAccount = await SaleslModel.findOne({
      username,
    });
    if (!salesAccount) {
      return {
        message: "Wrong username",
        codeName: "WRONG_USERNAME",
      };
    }
    const isValid = await compareHashPassword(password, salesAccount?.password);
    if (!isValid) {
      return {
        message: "Wrong password",
        codeName: "WRONG_PASSWORD",
      };
    }

    const payload = await encrypt(salesAccount);

    await createAuth(payload);
    redirect("/");
  } catch (error) {
    return {
      message: "Internal Server Error",
      codeName: "INTERNAL_SERVER_ERROR",
    };
  }
});

export const logout = () => {};

export const createHashPassword = async (password: string): Promise<string> => {
  try {
    const hash: string = await bcrypt.hash(
      password,
      Number(process.env.NEXT_PUBLIC_BCRYPT_SALT_COUNT)
    );
    return hash;
  } catch (error) {
    throw error;
  }
};

export const compareHashPassword = async (pass: string, hash: string) => {
  try {
    const compare: boolean = await bcrypt.compare(pass, hash);
    return compare;
  } catch (error) {
    throw error;
  }
};
