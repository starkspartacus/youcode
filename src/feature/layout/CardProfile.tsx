import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { getAuthSession } from '@/lib/auth';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default async function CardProfile  (){
  const session = await getAuthSession();
  return (
    <Card>
      <Avatar>
        <AvatarImage src={session?.user.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <CardHeader>
        <CardTitle>{session?.user.name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
