"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useFormStatus } from "react-dom";

interface iAppProps {
  link: string;
  type?: string;
  outline?: string;
}

export default function ButtonCustom({ link, type, outline }: iAppProps) {
  const { pending } = useFormStatus();
  return (
    <Link href={link}>
      <button
        disabled={pending}
        style={{
          clipPath:
            "polygon(15% 0%, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%)",
        }}
        className={`relative ${
          outline === "outline"
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-red-600 hover:bg-red-700 "
        }  ${
          pending && "bg-gray-600 hover:bg-gray-600 "
        } px-10 py-4 uppercase text-white font-bold`}
      >
        {pending ? (
          <span className="flex items-center space-x-2">
            <Loader2 className="mr-2 size-4 animate-spin" />
            <em>Loading</em>
          </span>
        ) : (
          type
        )}
      </button>
    </Link>
  );
}
