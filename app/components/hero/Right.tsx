import car from '@/public/carindoor.jpg';
import Image from 'next/image';


export default function Right() {
    return (
        <div className=" relative flex-1 w-full overflow-hidden rounded-[100px] shadow-xl border-blue-500 aspect-[16/11]">
            <Image
                sizes="(max-width: 400px) 200px, 400px"
                fill
                src={car}
                alt="car"
            />
        </div>
    )
}
