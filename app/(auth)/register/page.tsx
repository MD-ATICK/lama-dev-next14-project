import { register } from "@/lib/register";

export default function page() {
  return (
    <div className=" container h-[75vh] flex justify-center items-center mx-auto p-[3vw] ">
      <form action={register} className=" w-full space-y-4 md:w-[40%]">
        <h1 className=" font-bold text-2xl">Register!</h1>
        <input name="name" placeholder="name" className=" py-3 px-8 w-full bg-sky-950 rounded-lg text-sm mb-2" type="text" />
        <input name="email" placeholder="email" className=" py-3 px-8 w-full bg-sky-950 rounded-lg text-sm mb-2" type="email" />
        <input name="password" placeholder="password" className=" py-3 px-8 w-full bg-sky-950 rounded-lg text-sm mb-2" type="password" />
        <button className=" text-white w-full py-3 bg-sky-600 rounded-lg text-sm">Register</button>
      </form>
    </div>
  )
}
