import { HydrateClient } from "~/trpc/server";
import Home from "./_components/Section/Home";

export default async function HomePage() {

  return (
    <HydrateClient>
      <Home/>
    </HydrateClient>
  );
}
