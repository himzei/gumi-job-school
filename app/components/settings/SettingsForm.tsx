"use client";

import { updateUsername } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
  message: "",
};

export function SettingsForm({
  firstName,
}: {
  firstName: string | null | undefined;
}) {
  const [state, formAction] = useActionState(updateUsername, initialState);
  return (
    <form action={formAction}>
      <h1 className="text-3xl font-extrabold tracking-tight">Settings</h1>
      <Separator className="my-4" />
      <Label className="text-lg">Username</Label>
      <p className="text-muted-foreground">
        In this settings page you cna change
      </p>
      <Input
        defaultValue={firstName ?? undefined}
        name="firstName"
        required
        className="mt-2"
        min={2}
        maxLength={21}
      />

      <div className="w-full flex mt-5 gap-x-5 justify-end">
        <Button variant="secondary" asChild type="button">
          <Link href="/">Cancel</Link>
        </Button>
        <Button type="submit">Change Username</Button>
      </div>
    </form>
  );
}
