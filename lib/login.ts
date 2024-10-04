import { signIn } from "./auth";

export const login = async (formData: FormData) => {
    "use server"
    const { email, password } = Object.fromEntries(formData)
    if (!email || !password) return console.log('hi');

    await signIn('credentials', { email, password, redirectTo: '/' })

}