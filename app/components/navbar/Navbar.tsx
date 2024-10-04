"use server"
import { auth } from '@/lib/auth'
import logo from '@/public/favicon.ico'
import Image from 'next/image'
import Link from 'next/link'
import Links from './Links'
export default async function Navbar() {

  const session = await auth()

  return (
    <div className=" sticky top-0  z-20 left-0 border-b border-gray-900 mx-auto h-20 flex bg-[#000016] justify-between items-center container">
      <Link href={'/'} className=' cursor-pointer items-center gap-2 flex'>
        <Image src={logo} alt='logo' width={35} height={35} />
        <h1 className=' font-bold text-xl'>GrabHive</h1>
      </Link>
      <Links session={session} />
    </div>
  )
}
