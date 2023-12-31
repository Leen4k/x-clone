import React from 'react'
import {FaXTwitter} from "react-icons/fa6"
import {BiHomeCircle,BiUser} from "react-icons/bi"
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import Popup from './Popup'
import Addpost from './Addpost'
import Link from 'next/link'



const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen border-r-2 border-slate-100 col-span-2 lg:col-span-3 min-w-0 h-screen overflow-hidden flex flex-col items-center lg:items-start">
      <div className="py-2 px-6 rounded-full cursor-pointer"><FaXTwitter className="text-3xl" /></div>
      <div className="flex flex-col lg:w-full">
        <div className="p-2">
          <Link href="/" className="text-xl flex items-end gap-4 hover:bg-slate-200 py-2 px-4 rounded-full"><BiHomeCircle className="text-3xl" /><span className="hidden lg:block">Home</span></Link>
        </div>
        <div className="p-2">
          <Link href="/profile" className="text-xl flex items-end gap-4 hover:bg-slate-200 py-2 px-4 rounded-full"><BiUser className="text-3xl" /><span className="hidden lg:block">Profile</span></Link>
        </div>
        <Addpost image={session?.user?.image || ""} />
      </div>
      {session && 
        <div className="flex p-2 gap-2 w-full items-center justify-center justify-self-center self-end ">
          <Popup session={session} />
        </div>
      }
    </div>
  )
}

export default Navbar