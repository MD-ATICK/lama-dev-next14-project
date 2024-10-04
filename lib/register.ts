import { signIn } from './auth';
interface user {
    name: string,
    email: string,
    password: string,
}

export const register = async (formData: FormData) => {
    "use server"
    const { name, email, password } = Object.fromEntries(formData)
    if (!name || !email || !password) return console.log('hi');

    await signIn('credentials', { email, password, redirectTo: '/' });
    // try {

    // todo: having some error;
    // const find = await db.user.findFirst({ where: { email: String(email) } })
    // if (find) throw new Error('user already exists')

    // await db.user.create({
    //     data: {
    //         name: name.toString(),
    //         email: email.toString(),
    //         password: hashSync(password.toString(), 10),
    //     }
    // })



    // } catch (error) {
    //     console.log((error as Error).message)
    //     return error;
    // }
}