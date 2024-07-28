import { Post, PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

interface post {
    title: string,
    description: string,
    slug: string,
}

export async function addPost(formData: FormData) {
    "use server"
    const prisma = new PrismaClient()

    const { title, description, slug } = Object.fromEntries(formData)
    try {
        const post = await prisma.post.create({
            data: {
                title: title.toString(),
                description: description.toString(),
                slug: slug.toString()
            }
        })

        revalidatePath('/blog')

    } catch (error) {
        throw new Error('post could not be added')
    }
}