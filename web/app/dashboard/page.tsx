"use client";

import Image from "next/image";
import instructions from "@/public/instructions.png";

export default function DashboardPage() {
  // return <Dashboard />;
  return <Instructions />;
}

function Instructions() {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">
          How to Get an API Key
        </h1>

        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            Visit
            <a
              href="https://aistudio.google.com/app/apikey"
              className="text-blue-400 hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google AI Studio
            </a>
          </li>
          <li>Create a new API key and copy it.</li>
          <div className="mt-6 flex justify-center">
            <Image
              src={instructions}
              alt="Instructions screenshot"
              width={700}
              height={350}
            />
          </div>
          <li>Paste it in the extension.</li>
        </ol>
    </div>
  );
}
