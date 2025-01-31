import { CloudRain } from "lucide-react";

const features = [
  {
    name: "Sign up for free",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam nisi aperiam dignissimos autem. Enim nulla totam esse repellendus id.",
    icon: CloudRain,
  },
  {
    name: "2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam nisi aperiam dignissimos autem. Enim nulla totam esse repellendus id.",
    icon: CloudRain,
  },
  {
    name: "Si33",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam nisi aperiam dignissimos autem. Enim nulla totam esse repellendus id.",
    icon: CloudRain,
  },
  {
    name: "S3333",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam nisi aperiam dignissimos autem. Enim nulla totam esse repellendus id.",
    icon: CloudRain,
  },
];
export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Blog Faster</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          주제
        </h1>
        <p className="mt-6 text-sm leading-snug text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          blanditiis.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:maw-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
          {features.map((item) => (
            <div key={item.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <item.icon className="size-6 text-white" />
                </div>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
