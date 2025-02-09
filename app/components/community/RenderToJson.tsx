"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect, useState } from "react";

export function RenderToJson({ data }: { data: any }) {
  const [editable, setEditable] = useState(false);
  const editor = useEditor({
    shouldRerenderOnTransaction: false,
    editable,
    content: data,
    extensions: [StarterKit],
  });

  useEffect(() => {
    if (!editor) {
      return undefined;
    }

    editor.setEditable(editable);
  }, [editor, editable]);

  if (!editor) {
    return null;
  }

  return (
    <div className="px-2">
      <EditorContent editor={editor} />
    </div>
  );
}
