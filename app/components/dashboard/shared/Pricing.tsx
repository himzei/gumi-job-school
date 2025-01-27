import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <div className="max-w-4xml mx-auto text-center">
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

      <div className="grid gird-cols-1 gap-8 mt-5 lg:grid-cols-2">
        {PricingPlans.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.cardTitle}</CardTitle>
              <CardDescription>{item.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.priceTitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
