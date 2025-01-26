import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewSiteRoute() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Card className="max-w-[450px]">
        <CardHeader>
          <CardTitle>사이트 만들기</CardTitle>
          <CardDescription>
            아래 버튼을 클릭하여 사이트를 만들어 주세요!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="grid gap-2">
              <Label>사이트 이름</Label>
              <Input placeholder="사이트 이름" />
            </div>

            <div className="grid gap-2">
              <Label>Subdirectory</Label>
              <Input placeholder="Subdirectory" />
            </div>

            <div className="grid gap-2">
              <Label>설명</Label>
              <Textarea placeholder="Small description for your site" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>생성하기</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
