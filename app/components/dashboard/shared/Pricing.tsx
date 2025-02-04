import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { SubmitButton } from "../SubmitButton";
import Link from "next/link";
import { CreateSubscription } from "@/app/actions";
import { TitleRotate } from "../../frontend/TitleRotate";

interface iAppProps {
  id: number;
  cardTitle: string;
  cardDescription: string;
  priceTitle: string;
  benefits: string[];
}

export const PricingPlans: iAppProps[] = [
  {
    id: 0,
    cardTitle: "Freelencer",
    cardDescription: "The best pricing plan for people starting o out.",
    benefits: [
      "1 site",
      "up to 1000 visitors",
      "up to 1000 visitors",
      "up to 1000 visitors",
    ],
    priceTitle: "Free",
  },
  {
    id: 1,
    cardTitle: "Freelencer",
    cardDescription: "The best pricing plan for professionals",
    benefits: [
      "unlimited sites",
      "up to 1000 visitors",
      "up to 1000 visitors",
      "up to 1000 visitors",
    ],
    priceTitle: "$29",
  },
];

export function PricingTable() {
  return (
    <>
      <div className="relative grid gird-cols-1 gap-8 mt-16 lg:grid-cols-3">
        {PricingPlans.map((item) => (
          <Card
            key={item.id}
            className={item.id === 1 ? "border border-primary" : ""}
          >
            <CardHeader>
              <CardTitle>
                {item.id === 1 ? (
                  <div className="flex items-center justify-between">
                    <h3 className="text-primary">Stratup</h3>
                    <p className="rounded-full bg-primary/20 px-3 py-1 text-xs leading-5 text-primary">
                      국비지원
                    </p>
                  </div>
                ) : (
                  <>{item.cardTitle}</>
                )}
              </CardTitle>
              <CardDescription>{item.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.priceTitle}</p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {item.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-x-3">
                    <Check className="text-primary size-5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {item.id === 1 ? (
                <form className="w-full" action={CreateSubscription}>
                  <SubmitButton text="buy plan" className="mt-5 w-full" />
                </form>
              ) : (
                <Button variant="outline" className="mt-5 w-full" asChild>
                  <Link href="/dashboard">Choose Plan</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
        <svg
          className="absolute -mt-24 blur-3xl -z-10"
          fill="none"
          viewBox="0 0 400 400"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_10_20)">
            <g filter="url(#filter0_f_10_20)">
              <path
                d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                fill="#03FFE0"
              ></path>
              <path
                d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                fill="#7C87F8"
              ></path>
              <path
                d="M320 400H400V78.75L106.2 134.75L320 400Z"
                fill="#4C65E4"
              ></path>
              <path
                d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                fill="#043AFF"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="720.666"
              id="filter0_f_10_20"
              width="720.666"
              x="-160.333"
              y="-160.333"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_10_20"
                stdDeviation="80.1666"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
