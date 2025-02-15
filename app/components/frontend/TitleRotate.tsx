interface iAppProps {
  text: string;
  mainTitle: string;
  description: string;
}

export function TitleRotate({ text, mainTitle, description }: iAppProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-1 px-4 lg:px-2">
      <div className="relative flex items-center uppercase w-80 h-10 text-xl tracking-[10px] mb-4">
        <span className="text-[#c6a972]">{text}</span>
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#c6a972] " />
      </div>
      <div className="space-y-0">
        <h2 className="text-3xl font-bold uppercase py-2">{mainTitle}</h2>
        <p className="text-muted-foreground tracking-tight font-light ">
          {description}
        </p>
      </div>
    </div>
  );
}
