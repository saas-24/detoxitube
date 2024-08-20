"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import config from "@/amplify-config.json";

Amplify.configure(config as any);

export default function AmplifyProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}
