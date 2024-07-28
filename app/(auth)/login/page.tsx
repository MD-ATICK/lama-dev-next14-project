import { auth, signIn } from "@/lib/auth"
import { login } from "@/lib/login"

export default async function page() {

  const session = await auth()
  console.log({ session })

  const handleGithubLogin = async () => {
    "use server"
    await signIn('github')
  }

  return (
    <div className=" container p-10 mx-auto">
      {

      }
      <form action={login} className="w-[40%]">
        <input name="email" placeholder="email" className=" py-3 px-8 w-full bg-sky-950 rounded-lg text-sm mb-2" type="email" />
        <input name="password" placeholder="password" className=" py-3 px-8 w-full bg-sky-950 rounded-lg text-sm mb-2" type="password" />
        <button type="submit" className=" text-white w-full py-3 bg-sky-600 rounded-lg text-sm">Login</button>
      </form>
      <br /> <br />
      <form action={handleGithubLogin}>
        <button type="submit" className=" w-2/5 text-sm font-medium bg-sky-600 rounded-lg py-3 px-6">Login With Github</button>
      </form>
    </div>
  )
}
