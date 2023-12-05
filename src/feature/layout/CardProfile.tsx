import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { LogOutButton } from "./auth/LogOutButton";
import { Btn } from "./btn";
import clsx from "clsx";
import { Shield } from "lucide-react";
import Link from "next/link";

export default async function CardProfile() {
  const session = await getAuthSession();
  return (
    <Card className="items-center justify-center w-60">
      <div className="flex justify-between">
        <Avatar>
          <AvatarImage src={`${session?.user.image}`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Link href="/admin/courses">
          <Btn>
            {" "}
            <Shield /> Admin
          </Btn>
        </Link>
      </div>
      <CardHeader>
        <CardTitle>{session?.user.name}</CardTitle>
        <CardDescription>{session?.user.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{session?.user.email}</p>
      </CardContent>
      <CardFooter>
        <p>{session?.expires}</p>
      </CardFooter>
      <LogOutButton />
    </Card>
  );
}
