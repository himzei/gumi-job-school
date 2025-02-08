"use client";

import { Share } from "lucide-react";
import { toast } from "sonner";

export function CopyLink({ id }: { id: string }) {
  async function copytoClipboard() {
    await navigator.clipboard.writeText(`${location.origin}/post/${id}`);
    toast.success("링크가 클립보드에 복사되었습니다. 이제 공유해 보세요");
  }

  return (
    <button className="flex items-center gap-x-1" onClick={copytoClipboard}>
      <Share className="size-4 text-muted-foreground " />
      <p className="text-muted-foreground font-medium text-xs">share</p>
    </button>
  );
}
