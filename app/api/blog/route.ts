import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET() {
    const prisma = new PrismaClient()
    try {
        const posts = await prisma.post.findMany()
        console.log('x', posts)
        if (!posts) return console.log('No users found');
        return NextResponse.json(posts)
    } catch (error) {
        console.log(error)
        throw new Error('failed to fetch.')
    }
}