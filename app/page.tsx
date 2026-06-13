import { getServerUser } from "./lib/auth";

export default async function Home() {
  const user = await getServerUser();
  return <div>Hello {user?.name}</div>;
}
