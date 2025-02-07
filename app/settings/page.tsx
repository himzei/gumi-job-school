import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { SettingsForm } from "../components/settings/SettingsForm";
import prisma from "../utils/db";
import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";

async function getData(userId: string) {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
    },
  });

  return data;
}

export default async function SettingsPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }
  const data = await getData(user.id);
  return (
    <div className="max-w-7xl min-h-[600px] mx-auto flex flex-col my-4">
      <SettingsForm firstName={data?.firstName} />
    </div>
  );
}
