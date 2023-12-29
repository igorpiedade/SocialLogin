/* eslint-disable @next/next/no-img-element */
"use client"
import { useSession, signOut } from "next-auth/react";
import { redirect } from 'next/navigation'

interface userData {
  image: string,
  name: string,
  email: string,
}

 export default function Profile() {
  // @ts-ignore
  const { data: session }:userData = useSession();

  if(!session){
     redirect('/')
    }
  
  return (
        <div className=" h-screen flex justify-center items-center">
          <div className=" w-128 h-160 space-y-10 p-10 flex flex-col items-center rounded-md shadow-[10px_10px_50px_rgba(8,_112,_184,_0.5)] ">
              <div className=" bg-slate-500 rounded-full h-40 w-40 overflow-clip border-solid border-cyan-500 shadow-[10px_20px_70px_rgba(8,_112,_184,_0.5)]">
                <img
                  src={session.user.image}
                  alt="photo of user profile"
                  width="100%"
                />
              </div>
              <span>
                <h1 className=" font-logo text-4xl">{session.user.name}</h1>
                <p>{session.user.email}</p>
              </span>
              <button onClick={() => signOut()} className=" relative rounded-2xl bottom-0 bg-rose-900 text-slate-300 font-bold py-2 px-4 hover:bg-rose-600">
                LOGOUT
              </button>
          </div>
        </div>
      )
}