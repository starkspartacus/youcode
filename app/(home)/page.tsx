import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/auth";
import CardProfile from "@/src/feature/layout/CardProfile";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const session = await getAuthSession();

  const courses = await prisma.course.findMany({
    select: {
      id: true,
      presentation: true,
      title: true,
      image: true,
      price: true,
      user: {
        select: {
          name: true,
          image: true,
          email: true,
          id: true,
          username: true,
        },
      },
    },
  });

  return (
    <>
      <div className="m-4">
        {session ? (
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Bienvenue {session?.user.name}
          </h1>
        ) : (
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Bienvenue sur <span className="text-blue-600">C</span>hat
            <span className="text-blue-600">N</span>et
          </h1>
        )}
        {courses.map((c) => (
          <Image
            key={c.id}
            src={c.image}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        ))}
      </div>
    </>
  );
}
