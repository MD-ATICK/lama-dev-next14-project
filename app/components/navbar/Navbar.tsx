
import logo from '@/public/favicon.ico'
import Image from 'next/image'
import Links from './Links'
import { auth } from '@/lib/auth'
export default async function Navbar() {

  const session = await auth()

  return (
    <div className=" sticky top-0  z-20 left-0 border-b border-gray-900 mx-auto h-20 flex bg-[#000016] justify-between items-center container">
      <div className=' items-center gap-2 flex'>
        <Image src={logo} alt='logo' width={35} height={35} />
        <h1 className=' font-bold text-xl'>Logo.</h1>
      </div>
      <Links session={session} />
    </div>
  )
}
