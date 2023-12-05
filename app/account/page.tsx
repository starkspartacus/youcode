
import { getAuthSession } from "@/lib/auth"
import CardProfile from "@/src/feature/layout/CardProfile"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"


export default async function  AccountPage(){
  const session = await getAuthSession()
  if(!session){
      throw new Error('No session found')
    
  }
  return (
    <>
    <div>Mon compte </div>
      <CardProfile />
    </>
    
    
  )
}
