import { PricingPlans } from "@/app/courses/courseData";
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
import Link from "next/link";

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
                  <div className="flex flex-col items-center gap-y-2">
                    <p className="rounded-full bg-primary/20 px-3 py-1 text-xs leading-5 text-primary">
                      모집중 과정
                    </p>
                    <h3 className="text-primary text-center text-balance">
                      {item.cardTitle}
                    </h3>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-y-2">
                    <p className="rounded-full bg-muted px-3 py-1 text-xs leading-5 ">
                      진행중 과정
                    </p>
                    <h3 className="text-center text-balance">
                      {item.cardTitle}
                    </h3>
                  </div>
                )}
              </CardTitle>
              <CardDescription className="text-center">
                {item.cardDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="">{item.priceTitle}</p>
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
                <Button className="mt-5 w-full" asChild>
                  <Link href={item.href}>상담 및 과정 신청하기</Link>
                </Button>
              ) : (
                <Button variant="outline" className="mt-5 w-full" asChild>
                  <Link href={item.href}>자세히보기</Link>
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
