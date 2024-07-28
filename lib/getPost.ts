"use server"
import { PrismaClient } from "@prisma/client";

export async function getPosts() {
    const prisma = new PrismaClient()

    try {
        const posts = await prisma.post.findMany()
        return posts;
    } catch (error) {
        throw new Error('post could not be added')
    }
}