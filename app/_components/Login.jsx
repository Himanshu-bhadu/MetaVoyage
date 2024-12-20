'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { signIn, signOut, useSession } from "next-auth/react"
import GoogleLogo from "./logos/Google";

export default function LoginDialog() {
 const { data: session } = useSession();

  const handleLogin = (provider) => {
    signIn(provider)
  } 

  if (session) {
    return (
      <div>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  } 

  return (
  
  <Dialog>
      <DialogTrigger> 
        Login
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
      </DialogHeader>
     <div>
        <button onClick={() => handleLogin('google')}><GoogleLogo /></button>
    </div>
    </DialogContent>
  </Dialog>
  )
}