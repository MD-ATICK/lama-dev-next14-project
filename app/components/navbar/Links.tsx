"use client"
import logo from '@/public/favicon.ico'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import LogoutBtn from '../logout/LogoutBtn'
import CloseBtn from './CloseBtn'
import MenuBtn from './MenuBtn'


export default function Links({ session }: any) {


    const pathName = usePathname()
    const navLinks = [
        {
            name: 'Admin',
            route: '/admin',
        },
        {
            name: 'Home',
            route: '/',
        },
        {
            name: 'About',
            route: '/about',
        },
        {
            name: 'Contact',
            route: '/contact',
        },
        {
            name: 'Blog',
            route: '/blog',
        },
    ]

    const [menu, setMenu] = useState<Boolean>(false);

    const isAdmin = true
    return (
        <div>
            <div className=' hidden sm:flex items-center gap-5 text-sm'>
                {
                    navLinks.map((link, index) => (
                        <Link key={index} href={link.route} className={` ${pathName === link.route && 'border-b-2'} hover:border-b-2 duration-500`}>{link.name}</Link>
                    ))
                }
                {
                    session ? <div className='flex items-center gap-8'>
                        {
                            isAdmin && <Link href={'/admin'}>Admin</Link>
                        }
                        <LogoutBtn />
                    </div> :
                        <div className='flex items-center gap-2'>
                            <Link href={'/login'} className=' text-sm py-3 px-8 font-medium rounded-lg bg-white text-black'>Login</Link>
                            <Link href={'/register'} className=' text-sm py-3 px-8 font-medium rounded-lg bg-white text-black'>Register</Link>
                        </div>
                }
            </div>
            <div className=' block sm:hidden'>
                <MenuBtn setMenu={setMenu} />
            </div>


            {/* sidebar  */}
            <div className={`${menu ? 'w-full p-5 opacity-100' : 'w-0 p-0 opacity-50'} duration-300 bg-gray-950 flex sm:hidden z-20 flex-col gap-16 h-screen fixed top-0 right-0 `}>
                <div className='flex items-center justify-between'>
                    <div className=' items-center gap-2 flex'>
                        <Image src={logo} alt='logo' width={35} height={35} />
                        <h1 className=' font-bold text-xl'>Logo.</h1>
                    </div>
                    <CloseBtn setMenu={setMenu} />
                </div>
                <div className='flex flex-col gap-y-8 text-md'>
                    {
                        navLinks.map((link, index) => (
                            <Link onClick={() => setMenu(false)} key={index} href={link.route} className=' hover:border-b-2 duration-700'>{link.name}</Link>
                        ))
                    }
                    {
                        session ? <div className='flex flex-col gap-8'>
                            {
                                isAdmin && <Link href={'/admin'}>Admin</Link>
                            }
                            <button className=' text-sm py-3 px-8 font-medium rounded-lg bg-white text-black'>Logout</button>
                        </div> :
                            <div className='flex flex-col gap-3'>
                                <button className=' text-sm py-3 px-8 font-medium rounded-lg bg-white text-black'>Login</button>
                                <button className=' text-sm py-3 px-8 font-medium rounded-lg bg-white text-black'>Register</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
