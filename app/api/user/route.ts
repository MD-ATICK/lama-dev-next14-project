import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET() {
    const prisma = new PrismaClient()
    try {
        const users = await prisma.user.findMany()
        if (!users) return console.log('No users found');
        return NextResponse.json(users)
    } catch (error) {
        console.log(error)
        throw new Error('failed to fetch.')
    }
}