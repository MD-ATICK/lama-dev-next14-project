import contact from '@/public/contact.png'
import Image from 'next/image'
import Loading from '../components/loading/Loading'
import { Suspense } from 'react'
import Right from '../components/contact/Right'

export default function page() {
  return (
    <div className=" flex flex-col gap-y-10 sm:flex-row py-10 items-center container mx-auto">
      <div className="left flex-[0.52] w-[95%] mx-auto sm:w-full aspect-[16/16] relative">
        <Image src={contact} alt='contact' fill sizes='(max-width : 400px) 150px, 300px' />
      </div>
      <div className="right flex-1 w-full">
        <div className=' sm:w-[80%] max-h-[400px] sm:ml-auto'>
          <Suspense fallback={<Loading step={1} />} >
            <Right />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
