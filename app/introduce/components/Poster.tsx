import { outlineContents } from "./outlineContents";
import TitleSection from "./TitleSection";

export function Poster() {
  return (
    <div className="w-full flex flex-col space-y-16 py-16 max-w-7xl mx-auto">
      {/* title */}
      <TitleSection
        section="outline"
        mainTitle="대구한의대 학생들의 취업성공을"
        subTitle="이끌어내기 위해 노력합니다"
        size="lg"
      />
      {/* 본문 */}
      <div className="grid sm:grid-cols-1 space-y-8 md:grid-cols-2">
        {/* 1 */}
        <div className="flex flex-col space-y-8">
          {outlineContents.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex flex-col space-y-2">
                {/* number */}
                <div className="flex items-center">
                  <p className="text-red-500 font-semibold mr-2">{item.no}</p>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                </div>
                <div className="pl-2 text-gray-700">
                  {/* 내용 */}
                  <p className="">{item.content1}</p>
                  {item.content2 && <p className=" ">{item.content2}</p>}
                  {item.content3 && <p className=" ">{item.content3}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 2 */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="poster-img"
            className="w-[500px] h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
