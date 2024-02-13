import { SessionOptions } from "iron-session";
import { SignJWT, jwtVerify } from "jose";

const key = new TextEncoder().encode(process.env.NEXT_PUBLIC_JOSE_SECRET);

export const ironOption: SessionOptions = {
  password: "ancuacyagyugc6qwcydbjcbjadbcajhcbdja",
  cookieName: "vespa-udayana",
};

export async function encrypt(payload: any) {
  return await new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 minutes")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
