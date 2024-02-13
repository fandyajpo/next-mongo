import { getAuth } from "@/service/auth";
export default async function Home() {
  const user = await getAuth();
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
