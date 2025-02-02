import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Hero } from "./components/frontend/Hero";
import MainSlide from "./components/frontend/MainSlide";
import { PricingTable } from "./components/dashboard/shared/Pricing";
import { Footer } from "./components/frontend/Footer";
import { TitleRotate } from "./components/frontend/TitleRotate";

export default async function Home() {
  return (
    <>
      <section className=" mx-auto ">
        <Hero />
      </section>
      <section className="w-full mx-auto">
        <MainSlide />
      </section>
      <section className="w-full mx-auto  py-16">
        <div className="max-w-7xl w-full mx-auto">
          <PricingTable />
        </div>
      </section>

      <section>
        <div className="relative w-full h-[500px] flex justify-end border-t border-b border-gray-700">
          <div
            className="w-[55%] h-full"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
            }}
          >
            <img
              src="https://wallpapers.com/images/high/marvel-pictures-2jubj1we7xoo8b6g.webp"
              className="w-full h-full object-cover"
              alt="title-img"
            />
          </div>
          <div className="absolute left-[50%] -translate-x-[50%] px-4 max-w-7xl w-full h-full flex flex-col justify-center space-y-8">
            <div>
              <TitleRotate text="on sale 1/17" color="dark" />
              <h2 className="text-4xl font-bold uppercase py-2">
                New on Marvel Unlimited
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full flex justify-center">
          <div className="max-w-7xl w-full mx-auto bg-white shadow-lg"></div>
        </div>
      </section>

      <section className="bg-muted">
        <Footer />
      </section>
    </>
  );
}
