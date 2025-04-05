import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const body = await request.json()
        const { password } = body
        if (password === process.env.MASTER_CODES){
            return NextResponse.json({success: "true", message: "Authenticated Successfully"})
        }

    } catch (error) {
        console.error("POST Error: ", error)
        return NextResponse.json({error: "Server Error"}, {status: "500"})
    }
}