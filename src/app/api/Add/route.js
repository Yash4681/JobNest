import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();

  await prisma.User.create({
    data: body,
  });

  const data = await prisma.User.findMany({ where: { id: "1" } });

  return NextResponse.json({ success: true, error: false, data: data });
}
