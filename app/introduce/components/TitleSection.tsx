interface iAppProps {
  section: string;
  mainTitle: string;
  subTitle?: string;
  subTitle2?: string;
  size?: string;
  color?: string;
}

export default function TitleSection({
  section,
  mainTitle,
  subTitle,
  subTitle2,
  size,
  color,
}: iAppProps) {
  return (
    <div className="w-full flex flex-col space-y-4 tracking-tighter">
      <h2
        className={`uppercase font-semibold ${
          color === "white" ? "text-white" : "text-red-600"
        }`}
      >
        {section}
      </h2>
      <div
        className={`${size === "lg" ? "sm:text-3xl md:text-5xl" : "text-3xl"} ${
          color === "white" && "text-white"
        } font-bold trackging-tight`}
      >
        <p className="font-light">{mainTitle}</p>
        <p>{subTitle}</p>
        <p>{subTitle2}</p>
      </div>
    </div>
  );
}
