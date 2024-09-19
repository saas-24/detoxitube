"use client";

// import { signInWithRedirect, AuthError } from "aws-amplify/auth";
import { Button } from "../ui/button";
import { Chrome } from "lucide-react";
// import { useAuthenticator } from "@aws-amplify/ui-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LoginButton() {
  // const { signOut } = useAuthenticator();
  return (
    <Link
      href="https://chromewebstore.google.com/detail/detoxitube/ncoimiljegdhobghfelodibmnncepmad"
      target="_blank"
    >
      <Button className="font-semibold">
        <Chrome className="w-4 h-4 mr-1" />
        Install Chrome Extension
      </Button>
    </Link>
  );
}
