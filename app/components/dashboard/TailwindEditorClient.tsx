"use client";

import { useState } from "react";
import TailwindEditor from "./EditorWrapper";
import { JSONContent } from "novel";

export function TailwindEditorClient() {
  const [value, setValue] = useState<JSONContent | undefined>(undefined);
  return <TailwindEditor onChange={setValue} initialValue={value} />;
}
