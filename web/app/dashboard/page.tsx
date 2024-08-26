"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CRX_ID } from "@/constants";
import useKeywords from "@/hooks/useKeywords";
import { sendTokenToChromeExtension } from "@/utils/auth";
import { X } from "lucide-react";
import { Ref, useEffect, useRef } from "react";

export default function DashboardPage() {
  return <Dashboard />;
}

function Dashboard() {
  useEffect(() => {
    let sessionData: { [key: string]: string | null } = {};
    Array.from({ length: localStorage.length }).map((_, i) => {
      let k = localStorage.key(i);
      if (k !== null) {
        sessionData[k] = localStorage.getItem(k);
      }
    });
    console.log(sessionData);
    sendTokenToChromeExtension({ extensionId: CRX_ID, session: sessionData });
  }, []);
  return <Keywords />;
}

function Keywords() {
  const { addKeyword, keywords, removeKeyword } = useKeywords();
  const inputRef: Ref<HTMLInputElement> = useRef(null);
  return (
    <div className="w-[720px] mx-auto">
      <h1 className="text-2xl font-semibold my-3 mb-5">Keywords</h1>
      <div className="flex gap-3 w-full flex-wrap p-3 border-neutral-800 border rounded-lg">
        {keywords.map((keyword) => (
          <div
            key={keyword}
            className="bg-white p-2 px-3 flex items-center text-black rounded-full font-semibold rounded-full"
          >
            <span className="text-sm">{keyword}</span>
            <button
              onClick={() => removeKeyword(keyword)}
              className="font-mono ml-2"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          if (keywords.some((k) => k === inputRef.current?.value)) {
            return;
          }
          inputRef.current?.value && addKeyword(inputRef.current?.value);
          inputRef.current!.value = "";
        }}
        className="flex gap-3 mt-10 justify-center"
      >
        <div className="flex gap-3 justify-center">
          <Input
            type="text"
            ref={inputRef}
            className="text-white w-80 rounded-full bg-neutral-800"
            placeholder="Enter a keyword"
          />
          <Button type="submit" className="rounded-full">Add</Button>
        </div>
      </form>
    </div>
  );
}
