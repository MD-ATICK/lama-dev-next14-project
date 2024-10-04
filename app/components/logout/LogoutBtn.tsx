import { signOut } from "next-auth/react"

export default function LogoutBtn() {

    const Logout = async () => {
        await signOut()
    }

    return (
        <button onClick={Logout} className=' text-sm py-3 px-8 font-medium rounded-lg bg-white text-black'>Logout</button>
    )
}
