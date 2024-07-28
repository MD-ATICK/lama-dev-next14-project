import { PrismaClient } from "@prisma/client"
import { hashSync } from 'bcrypt'
interface user {
    name: string,
    email: string,
    password: string,
}

export const register = async (formData: FormData) => {
    "use server"
    const { name, email, password } = Object.fromEntries(formData)
    const prisma = new PrismaClient()
    if (!name || !email || !password) return console.log('hi');

    try {
        const find = await prisma.user.findFirst({ where: { email: String(email) } })
        if (find) throw new Error('user already exists')

        await prisma.user.create({
            data: {
                name: name.toString(),
                email: email.toString(),
                password: hashSync(password.toString(), 10),
            }
        })

        console.log("user register.")

    } catch (error) {
        console.log((error as Error).message)
    }
}