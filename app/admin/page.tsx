import { addPost } from "@/lib/addPost";

export default function page() {


  return (
    <div className=" container mx-auto py-12">
      <form action={addPost} className=" w-full md:w-[40%] flex items-center flex-col gap-y-4">
        <input name="title" type="text" placeholder="enter title" className=" px-8 py-3 w-full bg-gray-900 text-white text-sm rounded-lg" />
        <input name="description" type="text" placeholder="enter description" className=" px-8 py-3 w-full bg-gray-900 text-white text-sm rounded-lg" />
        <input name="slug" type="text" placeholder="enter slug" className=" px-8 py-3 w-full bg-gray-900 text-white text-sm rounded-lg" />
        <button type="submit" className=" py-3 text-sm mt-2 w-full bg-sky-600 rounded-lg font-medium">Create Post</button>
      </form>
    </div>
  )
}
