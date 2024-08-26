import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Component() {
  const { authStatus } = useAuthenticator();

  return <div>{authStatus}</div>;
}
