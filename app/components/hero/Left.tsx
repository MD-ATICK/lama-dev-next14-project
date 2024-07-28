import brands from '@/public/brands.png';
import Image from "next/image";
import Link from 'next/link';


export default function Left() {
    return (
        <div>
            <div className="left flex-1 flex flex-col gap-y-8 items-start">
                <h1 className=' text-[10vw] md:text-5xl font-bold leading-[10vw] md:leading-[55px]'>Creative <br /> Thoughts <br /> Agency.</h1>
                <p className=' text-sm text-gray-300 w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit dicta recusandae quae sed non quas ex minus mollitia soluta!</p>
                <div className=' flex items-center gap-3'>
                    <Link href={'/contact'} className=' text-sm cursor-pointer py-3 px-6 rounded-lg bg-sky-600 text-white font-medium'>Learn More</Link >
                    <Link href={'/contact'} className=' text-sm cursor-pointer py-3 px-6 rounded-lg bg-white text-black font-medium'>Contact</Link>
                </div>
                <Image src={brands} width={500} alt='hi ' className=' grayscale-[2] hover:grayscale-0 duration-300' />
            </div>
        </div>
    )
}
