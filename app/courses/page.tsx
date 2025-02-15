import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PricingPlans } from "./courseData";
import { Calendar, Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { statusDate } from "../utils/dateToStatus";

export default function CoursesPage() {
  return (
    <>
      <div className="min-h-screen max-w-7xl w-full mx-auto my-16 px-4">
        <Table>
          <TableCaption className="sr-only">구미 회계 컴퓨터 학원</TableCaption>
          <TableHeader>
            <TableRow className="font-semibold  grid grid-cols-1 md:grid-cols-[1fr_2fr_4fr_3fr]">
              <TableHead className=" items-center flex justify-center">
                진행상태
              </TableHead>
              <TableHead className=" items-center flex justify-center">
                포스터
              </TableHead>
              <TableHead className=" items-center flex justify-center">
                상세내용
              </TableHead>
              <TableHead className=" items-center flex justify-center">
                일정
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="space-y-4">
            {PricingPlans.map((item, i) => (
              <TableRow
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr_4fr_3fr] border hover:border-primary rounded-lg hover:bg-primary/10 duration-300"
              >
                <TableCell className="font-medium flex justify-center w-full h-fit">
                  {statusDate(
                    item?.recruit?.split("~")[0] as string,
                    item?.recruit?.split("~")[1] as string,
                    item?.release?.split("~")[0] as string,
                    item?.release?.split("~")[1] as string
                  )}
                </TableCell>
                <TableCell className="flex justify-center object-cover">
                  {" "}
                  <Link href={item.href}>
                    <Image
                      src={item.posterImg}
                      alt="poster01"
                      width={200}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col h-full">
                    <h1 className="font-medium text-2xl tracking-tight">
                      {item.cardTitle}
                    </h1>
                    <p className="text-muted-foreground">
                      {item.cardDescription}
                    </p>
                    <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                      {item.benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-x-3">
                          <Check className="text-primary size-5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TableCell>
                <TableCell className="h-full w-full flex items-center">
                  <Card className="w-full">
                    <CardHeader className="text-center font-light italic text-lg">
                      {item.priceTitle}
                    </CardHeader>
                    <Separator className="" />
                    <CardDescription className="flex flex-col space-y-4 text-muted-foreground p-4">
                      <div className="flex flex-col gap-y-2">
                        <Label className="flex  items-center text-primary">
                          <Calendar className="size-4  mr-1" />
                          모집일정
                        </Label>
                        <p className="">{item.recruit}</p>
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <Label className="flex  items-center text-primary">
                          <Calendar className="size-4  mr-1" />
                          수업일정
                        </Label>
                        <p className=""> {item.release}</p>
                      </div>
                    </CardDescription>
                  </Card>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* <div className="grid grid-cols-[200px_1fr_1fr] gap-x-10">
          <div>
            <Image
              src={Poster01}
              alt="poster01"
              width={200}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <h1 className="font-semibold text-2xl">
              빅데이터기반의 멀티사무관리원 양성과정
            </h1>
            <p className="font-light text-muted-foreground">
              ADsP + 전산세무회계(FAT1급, TAT2급)
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
