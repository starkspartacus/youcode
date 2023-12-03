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
      
      <Button variant="success">Click me</Button>
      <Input className="w-56 mt-10" placeholder="Enter your name" />
    </div>
    <CardProfile />
    </>
  );
}

