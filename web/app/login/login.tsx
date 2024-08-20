"use client";

import { Authenticator } from "@aws-amplify/ui-react";

export default function Login() {
  return <Authenticator socialProviders={["google"]} />;
}
