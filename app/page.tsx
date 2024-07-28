import { Suspense } from 'react';
import Left from './components/hero/Left';
import Right from './components/hero/Right';
import Loading from './components/loading/Loading';

export default function Home() {
  return (
    <div className=" py-[5vw] flex flex-col-reverse gap-y-6 sm:flex-row items-center container mx-auto">
      {/* left of hero */}
      <div className=' w-full flex-1'>
        <Suspense fallback={<div className=' w-full px-5 py-10'>
          <Loading step={1} />
        </div>} >
          <Left />
        </Suspense>
      </div>

      {/* right of hero */}
      <div className=' w-full flex-1'>
        <Suspense fallback={<h1>Loading img...</h1>}>
          <Right />
        </Suspense>
      </div>
    </div>
  );
}
