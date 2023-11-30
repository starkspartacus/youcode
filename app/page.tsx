import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="m-4">
      <Button variant="success">Click me</Button>
      <Input className="w-55 mt-5" placeholder="Enter your name" />
    </div>
    </>
  );
}
