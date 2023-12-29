"use client"
import { redirect } from 'next/navigation'
import { useSession, signIn } from "next-auth/react";

export default function SigninButton() {
const { data: session } = useSession();

if(session && session.user){
    redirect('/profile')
}

    return (
      <button onClick={() => signIn()} className=" rounded-2xl bg-sky-600 font-bold p-2 hover:bg-sky-800">
           LOGIN WITH SOCIAL
      </button>
    )
  
}