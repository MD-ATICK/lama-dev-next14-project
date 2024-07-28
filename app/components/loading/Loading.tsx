
export default function Loading({ step }: { step: number }) {
    return (
        <div className=" h-screen container mx-auto">
            {
                Array.from({ length: step }).map((_, i) => {
                    return (
                        <div key={i} className="pb-8  flex flex-col gap-y-3">
                            <p className=" skeleton w-full h-6 rounded-sm"></p>
                            <p className=" skeleton w-full h-6 rounded-sm"></p>
                            <p className=" skeleton w-full h-6 rounded-sm"></p>
                            <p className=" skeleton w-full h-6 rounded-sm"></p>
                            <p className=" skeleton w-full h-6 rounded-sm"></p>
                            <p className=" skeleton w-full h-6 rounded-sm"></p>
                        </div>
                    )
                })
            }

            {/* <div className="py-6  flex flex-col gap-y-3">
                <p className=" skeleton w-full h-6 rounded-sm"></p>
                <p className=" skeleton w-full h-6 rounded-sm"></p>
                <p className=" skeleton w-full h-6 rounded-sm"></p>
                <p className=" skeleton w-full h-6 rounded-sm"></p>
                <p className=" skeleton w-full h-6 rounded-sm"></p>
                <p className=" skeleton w-full h-6 rounded-sm"></p>
            </div>
            <div className="py-6  flex flex-col gap-y-3">
                <p className=" skeleton w-full h-6 rounded-sm"></p>
                <p className=" skeleton w-full h-6 rounded-sm"></p>
                <p className=" skeleton w-full h-6 rounded-sm"></p>
            </div> */}
        </div>
    )
}
