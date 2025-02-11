import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const userProfile = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    select: {
      profileImage: true,
      id: true,
    },
  });

  if (!userProfile) {
    return notFound();
  }

  return new Response(JSON.stringify(userProfile), {
    headers: { "Content-Type": "application/json" },
  });
}
