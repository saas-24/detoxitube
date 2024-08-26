"use client";

import { signInWithRedirect } from "aws-amplify/auth";
import { Button } from "../ui/button";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { ArrowRight } from "lucide-react";

export function LoginButton() {
  return (
    <Button
      onClick={() => signInWithRedirect({ provider: "Google" })}
      className="w-5/6 md:w-1/4 font-bold group/arrow"
    >
      Sign In
      <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
    </Button>
  );
}
