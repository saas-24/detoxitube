import { fetchAuthSession } from "aws-amplify/auth";

export async function getIdToken() {
  const idToken = (await fetchAuthSession()).tokens?.idToken;
  return idToken;
}
