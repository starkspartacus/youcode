import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/auth";
import CardProfile from "@/src/feature/layout/CardProfile";
import Image from "next/image";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <>
    <div className="m-4">
      <p>
        {JSON.stringify(session, null, 2)}
      </p>
      <Button variant="success">Click me</Button>
      <Input className="mt-5 w-55" placeholder="Enter your name" />
    </div>
    <CardProfile />
    </>
  );
}

