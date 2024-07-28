
export default function loading() {
    return (
        <div className=" h-[calc(100vh-185px)] p-10 flex container mx-auto w-full">
            <div className=" h-full w-full flex-1 skeleton rounded-lg"></div>
            <div className=" h-full w-full flex-1 px-16 ">
                <div className=" h-4 w-full flex-1 skeleton rounded-sm"></div>
                <div className='flex mt-3 items-center gap-x-3'>
                    <div className=" h-4 w-full flex-1 skeleton rounded-sm"></div>
                    <div className=" h-4 w-full flex-1 skeleton rounded-sm"></div>
                    <div className=" h-4 w-2/3 flex-1 skeleton rounded-sm"></div>
                </div>
                <div className='flex mt-3 items-center gap-x-3'>
                    <div className=" h-4 w-[50%] flex-1 skeleton rounded-sm"></div>
                    <div className=" h-4 w-[30%] flex-1 skeleton rounded-sm"></div>
                </div>
                <div className="mt-12 flex  gap-x-4">
                    <div className=" h-12 aspect-square skeleton rounded-full"></div>
                    <div className=" col-span-11 -mt-1 w-full">
                        <div className=" h-1 w-2/3 mt-2 flex-1 skeleton rounded-sm"></div>
                        <div className=" h-2 w-2/3 mt-2 flex-1 skeleton rounded-sm"></div>
                        <div className=" h-3 w-2/3 mt-2 flex-1 skeleton rounded-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
