interface iAppProps {
  section: string;
  mainTitle: string;
  subTitle?: string;
  subTitle2?: string;
}

export default function TitleSection({
  section,
  mainTitle,
  subTitle,
  subTitle2,
}: iAppProps) {
  return (
    <div className="w-full flex flex-col space-y-4 tracking-tighter">
      <h2 className={`uppercase font-semibold text-primary`}>{section}</h2>
      <div className={`trackging-tight text-3xl`}>
        <p className="font-light text-muted-foreground">{mainTitle}</p>
        <p className="font-bold">{subTitle}</p>
        <p>{subTitle2}</p>
      </div>
    </div>
  );
}
