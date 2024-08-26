import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import config from "@/amplify-config.json";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: config as any,
});
