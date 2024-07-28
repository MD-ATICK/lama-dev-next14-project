import { Post, PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache";

export async function getPosts() {
    "use server"
    const prisma = new PrismaClient()

    try {
        const posts = await prisma.post.findMany({})
        return posts;
    } catch (error) {
        throw new Error('post could not be added')
    }
}