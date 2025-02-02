import { TitleRotate } from "../components/frontend/TitleRotate";
import Consulting from "./components/Consulting";
import Features from "./components/Features";
import { Poster } from "./components/Poster";

export default function IntroducePage() {
  return (
    <>
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
      <div>
        <Features />
      </div>
      <div>
        <Poster />
      </div>
      <div className="relative">
        <img
          className="w-full h-[1000px] object-cover"
          src="https://images.unsplash.com/photo-1579546929556-bf8352f5889c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
        />
        <div className="absolute inset-0 w-full h-full flex items-center">
          <Consulting />
        </div>
      </div>
    </>
  );
}
