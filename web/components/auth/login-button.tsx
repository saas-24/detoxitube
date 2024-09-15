"use client";

// import { signInWithRedirect, AuthError } from "aws-amplify/auth";
import { Button } from "../ui/button";
import { Chrome } from "lucide-react";
// import { useAuthenticator } from "@aws-amplify/ui-react";
import { ArrowRight } from "lucide-react";

export function LoginButton() {
  // const { signOut } = useAuthenticator();
  return (
    <Button
      // onClick={() =>
      //   signInWithRedirect({ provider: "Google" }).catch((error) => {
      //     if (
      //       error instanceof AuthError &&
      //       error.name === "UserAlreadyAuthenticatedException"
      //     ) {
      //       signOut();
      //       signInWithRedirect({ provider: "Google" });
      //     }
      //   })
      // }
      className="w-5/6 md:w-1/4 font-semibold group/arrow"
    >
      <Chrome className="w-4 h-4" />
      Install Chrome Extension
      {/* <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" /> */}
    </Button>
  );
}
