import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { id } = await params;
  const res = await prisma.job.findFirst({
    where: { id: Number.parseInt(id) },
  });

  if (res) {
    return Response.json({ success: true, error: false, data: res });
  } else {
    return Response.json({
      success: false,
      error: true,
      message: "Id not found.",
    });
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const res = await prisma.job.findFirst({
    where: { id: Number.parseInt(id) },
  });
  if (res) {
    await prisma.job.delete({ where: { id: Number.parseInt(id) } });
    return Response.json({
      success: true,
      error: false,
      message: "Job is successfully deleted",
    });
  } else {
    return Response.json({
      success: false,
      error: true,
      message: "This job does not exist",
    });
  }
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  const res = await prisma.job.findFirst({
    where: { id: Number.parseInt(id) },
  });
  if (res) {
    await prisma.job.update({
      where: { id: Number.parseInt(id) },
      data: {
        company: body.company,
        location: body.location,
        title: body.title,
        desc: body.desc,
        type: body.type,
        skills: body.skills,
      },
    });
    return Response.json({
      success: true,
      error: false,
      message: "The data is successfully updated!",
    });
  } else {
    return Response.json({
      success: false,
      error: true,
      message: "Entry not found!",
    });
  }
}
