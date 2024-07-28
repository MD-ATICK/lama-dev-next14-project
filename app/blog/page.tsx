
import { getPosts } from '@/lib/getPost'
import car from '@/public/carindoor.jpg'
import Image from 'next/image'
import Link from 'next/link'

// const postsGet = async () => {
//   const res = await fetch('http://localhost:3000/api/blog', { next: { revalidate: 10 } })
//   if (!res.ok) return 'not success'
//   return res.json()
// }

export default async function page() {


  // $ get by apis
  // const posts = await postsGet()

  // $ action
  const posts = await getPosts()
  // console.log({ posts })

  return (
    <div className=" py-10 container px-2 mx-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
        {posts?.map((post) => (
          <Link href={'/blog/1'} key={post?.id} id='card'>
            <div className=' w-full flex  items-center'>
              <div className=' w-[90%] relative aspect-[16/11] '>
                <Image placeholder='blur' fill sizes='150px' alt='s23' src={car} className=' rounded-xl' />
              </div>
              <p className=' w-4 text-center whitespace-nowrap m-auto rotate-[270deg] text-sm text-gray-400'>{String(post?.createdAt).slice(0, 15)}</p>
            </div>
            <h1 className='pt-3 text-2xl font-semibold'>{post?.title}</h1>
            <p className=' text-sm text-gray-400'>{post?.description}</p>
            <button className=' underline text-sm mt-1'>Read more</button>
          </Link>
        ))}
      </div>
    </div>
  )
}
