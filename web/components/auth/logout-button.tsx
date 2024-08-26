"use client";

import { Button } from "../ui/button";
import { PowerIcon } from "lucide-react";
import { useAuthenticator } from "@aws-amplify/ui-react";

export function LogoutButton() {
  const { signOut } = useAuthenticator();
  return (
    <Button
      onClick={() => {
        signOut();
        history.pushState({}, "", "/");
      }}
      className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <PowerIcon className="w-6" />
      <div className="hidden md:block">Sign Out</div>
    </Button>
  );
}
