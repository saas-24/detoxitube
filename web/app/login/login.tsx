"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import { fetchAuthSession } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    fetchAuthSession().then((session) => {
      if (
        session.tokens?.accessToken !== undefined &&
        session.tokens?.idToken !== undefined
      ) {
        window.location.href = "/dashboard";
      }
    });
  }, []);
  return <Authenticator socialProviders={["google"]} />;
}
