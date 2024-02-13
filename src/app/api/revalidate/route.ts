import { revalidateTag } from "next/cache";

export const GET = () => {
  return revalidateTag("prospects");
};
