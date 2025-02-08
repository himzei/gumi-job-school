import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";

export function PostCard() {
  return (
    <Card className="flex relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-2 bg-muted p-2">
        <form>
          <Button size="sm" variant="outline">
            <ArrowUp className="size-4" />
          </Button>
        </form>
        0
        <form>
          <Button variant="outline" size="sm">
            <ArrowDown className="size-4" />
          </Button>
        </form>
      </div>

      <div>
        <div className="flex items-center gap-x-2 p-2">
          <Link href="/" className="font-semibold text-xs">
            r/himzei
          </Link>
        </div>
      </div>
    </Card>
  );
}
