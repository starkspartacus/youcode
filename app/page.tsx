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
      
        {session ? <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
        Bienvenue {session?.user.name}
      
      </h1> : <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
        Bienvenue sur <span className="text-blue-600">C</span>hat<span className="text-blue-600">N</span>et
        </h1>}

    </div>
    
    </>
  );
}

