import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const res = await prisma.job.findMany();
  return Response.json({ success: true, error: false, data: res });
}

export async function POST(request) {
  const body = await request.json();

  const res = await prisma.job.findFirst({
    where: {
      company: body.company,
      location: body.location,
      title: body.title,
      desc: body.desc,
      type: body.type,
      skills: body.skills,
    },
  });

  if (res) {
    return Response.json({
      success: false,
      error: true,
      message: "This job already exists.",
    });
  }

  const data = await prisma.job.create({ data: body });

  return Response.json({
    success: true,
    error: false,
    message: "Job is successfully created",
    data,
  });
}
