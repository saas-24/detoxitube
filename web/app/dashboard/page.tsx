"use client";

import { CRX_ID } from "@/constants";
import useKeywords from "@/hooks/useKeywords";
import { sendTokenToChromeExtension } from "@/utils/auth";
import { Ref, useEffect, useRef } from "react";

export default function DashboardPage() {
  // useEffect(() => {
  //   fetchAuthSession().then((session) => {
  //     if (
  //       session.tokens?.accessToken === undefined ||
  //       session.tokens?.idToken === undefined
  //     ) {
  //       // window.location.href = "/login";
  //     }
  //   });
  // }, []);
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
  return (
    <div>
      <Keywords />
    </div>
  );
}

function Keywords() {
  const { addKeyword, keywords, removeKeyword } = useKeywords();
  const inputRef: Ref<HTMLInputElement> = useRef(null);
  return (
    <div>
      <h1>Keywords</h1>
      <div className="flex space-x-2">
        {keywords.map((keyword) => (
          <div
            key={keyword}
            className="bg-white p-2 px-3 flex items-center text-black rounded-full font-semibold"
          >
            <span>{keyword}</span>
            <button
              onClick={() => removeKeyword(keyword)}
              className="font-mono ml-2"
            >
              x
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
      >
        <input type="text" ref={inputRef} className="text-black" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
