import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Hero } from "./components/frontend/Hero";
import { Features } from "./components/frontend/Features";
import MainSlide from "./components/frontend/MainSlide";
import { PricingTable } from "./components/dashboard/shared/Pricing";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <>
      <section className=" mx-auto ">
        <Hero />
      </section>
      <section className="w-full mx-auto">
        <MainSlide />
        <Features />
      </section>
      <section className="w-full mx-auto  py-16">
        <div className="max-w-7xl w-full mx-auto">
          <PricingTable />
        </div>
      </section>
    </>
  );
}
