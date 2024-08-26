/// <reference types="chrome"/>
import { fetchAuthSession } from "aws-amplify/auth";

export async function getIdToken() {
  const idToken = (await fetchAuthSession()).tokens?.idToken;
  return idToken;
}

export function sendTokenToChromeExtension({
  extensionId,
  session,
}: {
  extensionId: string;
  session: { [key: string]: string | null };
}) {
  chrome.runtime.sendMessage(extensionId, { session }, (response) => {
    if (!response.success) {
      console.log("error sending message", response);
      return response;
    }
    console.log("Sucesss ::: ", response.message);
  });
}
