import about from '@/public/about.png'
import Image from 'next/image'

export default function page() {
  return (
    <div className=' container p-0 md:p-12 mx-auto gap-y-8 flex flex-col-reverse md:flex-row items-center'>
      <div className="left flex flex-col gap-y-5 md:gap-y-10 md:pr-20 flex-1 w-full">
         <p className=' text-sky-500 font-semibold text-[16px] md:text-lg'>About Agency</p>
         <h1 className=' text-[8vw] md:text-5xl font-bold leading-[9vw] md:leading-[55px]'>We create digital ideas that are bigger , bolder , braver and better.</h1>
         <p className=' text-[13px] md:text-sm text-gray-400 md:leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid vero nulla. Soluta incidunt quos cupiditate cumque laboriosam explicabo consequatur possimus modi, veniam doloremque quaerat culpa molestiae delectus? Aliquam, quisquam.</p>
         <div className=' grid grid-cols-1 gap-y-5 md:grid-cols-3'>
            <div className=''>
              <h1 className=' text-3xl font-bold'>10K +</h1>
              <p>Years of Experience</p>
            </div>
            <div className=''>
              <h1 className=' text-3xl font-bold'>10K +</h1>
              <p>Years of Experience</p>
            </div>
            <div className=''>
              <h1 className=' text-3xl font-bold'>10K +</h1>
              <p>Years of Experience</p>
            </div>
         </div>

      </div>
      <div className="right relative flex-[.6] aspect-[16/16] w-[80%] md:w-full">
        <Image src={about} fill sizes="(max-width : 400px) 150px, 300px "  placeholder='blur' alt='about' />
      </div>
    </div>
  )
}
