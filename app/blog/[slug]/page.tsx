import car from '@/public/carindoor.jpg'
import profile from '@/public/noavatar.png'
import Image from 'next/image'


export default function page({ params }: { params: { slug: string } }) {
    return (
        <div className=" h-[calc(100vh-185px)] flex container mx-auto w-full">
            <div className=' w-full flex flex-col gap-y-4 flex-1 justify-center px-8'>
                <div className=" relative w-full aspect-[16/11]">
                    <Image src={car} sizes='300px' className=' rounded-xl' fill alt='' />
                </div>
                <div className='flex items-center gap-x-3'>
                    <Image src={car} width={100} alt='' className=' border border-blue-600 rounded-lg overflow-hidden' />
                    <Image src={car} width={100} alt='' className=' border border-blue-600 rounded-lg overflow-hidden' />
                    <Image src={car} width={100} alt='' className=' border border-blue-600 rounded-lg overflow-hidden' />
                    <Image src={car} width={100} alt='' className=' border border-blue-600 rounded-lg overflow-hidden' />

                </div>
            </div>
            <div className=' flex-1 pt-12 w-full'>
                <div className=' px-6 flex flex-col gap-y-6'>
                    <h1 className=' text-2xl font-bold'>Title</h1>
                    <div className='flex items-center gap-x-3'>
                        <Image src={profile} width={40} height={40} className=' rounded-full' alt='' />
                        <div>
                            <h2 className=' font-medium text-sm'>Mohammad Atick</h2>
                            <p className=' text-sm text-gray-500'>Developer</p>
                        </div>
                    </div>
                    <p className=' text-sm font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis a consectetur vel at excepturi culpa, incidunt suscipit enim, necessitatibus, alias labore? Nihil distinctio atque, repellendus ea consequuntur facilis ipsa! Facilis alias, vel consequuntur ullam minus dolores. Suscipit, quo! Placeat!</p>
                </div>
            </div>
        </div>
    )
}
