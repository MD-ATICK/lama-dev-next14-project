
export default function Loading() {
    return (
        <div className=" py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 container mx-auto">
            {
                Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className=" flex flex-col gap-y-3">
                        <p className=" skeleton w-full h-2 rounded-sm"></p>
                        <p className=" skeleton w-full h-2 rounded-sm"></p>
                        <p className=" skeleton w-full h-3 rounded-sm"></p>
                        <p className=" skeleton w-full h-4 rounded-sm"></p>
                        <p className=" skeleton w-full h-4 rounded-sm"></p>
                        <p className=" skeleton w-full h-5 rounded-sm"></p>
                        <p className=" skeleton w-full h-5 rounded-sm"></p>
                        <p className=" skeleton w-full h-6 rounded-sm"></p>
                        <p className=" skeleton w-full h-6 rounded-sm"></p>
                    </div>
                ))
            }
        </div>
    )
}
