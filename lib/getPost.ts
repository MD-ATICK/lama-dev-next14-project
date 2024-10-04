"use server"
import { db } from "./db";

export async function getPosts() {

    try {
        const posts = await db.post.findMany({})
        return posts;
    } catch (error) {
        throw new Error('post could not be added')
    }
}