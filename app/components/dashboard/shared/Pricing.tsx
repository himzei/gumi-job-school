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
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-semibold text-primary">Pricing</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Pricing Plans
        </h1>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        magni. Iure voluptatum repellat libero obcaecati quisquam quo inventore
        perspiciatis debitis sed possimus cum voluptate sequi, nisi eos eveniet
        natus accusamus.
      </p>

      <div className="grid gird-cols-1 gap-8 mt-16 lg:grid-cols-2">
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
      </div>
    </>
  );
}
