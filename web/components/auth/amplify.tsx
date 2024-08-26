"use client";

import { Amplify } from "aws-amplify";
import config from "@/amplify-config.json";

Amplify.configure(config as any, { ssr: true });

export function AmplifyConfigureClientSide() {
  return <></>;
}
