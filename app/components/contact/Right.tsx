
export default function Right() {
    return (
            <div className="flex flex-col  gap-4">
                <input type="email" className=' rounded-md placeholder:text-gray-400 outline-none outline-offset-2 focus:outline-2 focus:outline-sky-500 bg-[#081b35] w-full py-3 px-8 text-sm' placeholder='enter your name' />
                <input type="email" className=' rounded-md placeholder:text-gray-400 outline-none outline-offset-2 focus:outline-2 focus:outline-sky-500 bg-[#081b35] w-full py-3 px-8 text-sm' placeholder='enter your email' />
                <textarea rows={10} className=' rounded-md placeholder:text-gray-400 outline-none outline-offset-2 focus:outline-2 focus:outline-sky-500 bg-[#081b35] w-full py-3 px-8 text-sm' placeholder='send message' />
                <button className='py-3 text-center text-sm font-medium bg-sky-700 mt-4 rounded-md'>Contact</button>
            </div>
    )
}
