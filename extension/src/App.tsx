import { useEffect, useState } from "react";
import Component from "./Component";
import { Amplify } from "aws-amplify";
import config from "./amplify-config.json";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-south-1_VwZHgYFfr",
      userPoolClientId: "4jb8ffl31l44ihmkj70c3rvkp3",
      signUpVerificationMethod: "code",
      loginWith: {
        oauth: {
          domain: "detoxify.auth.ap-south-1.amazoncognito.com",
          redirectSignIn: [
            "http://localhost:3000/dashboard",
            "chrome-extension://mgihgjpcaelkloceabhmfmfhefangkpk",
          ],
          redirectSignOut: ["http://localhost:3000"],
          responseType: "code",
          scopes: ["email", "phone", "aws.cognito.signin.user.admin", "openid"],
        },
      },
    },
  },
});

function App() {
  useEffect(() => {
    // get session data from chrome.storage.local
    chrome.storage.local.get(null, function (items) {
      const allKeys = Object.keys(items);
      console.log("All keys in chrome.storage.local:", allKeys);
      Object.keys(items).forEach((key) => {
        localStorage.setItem(key, items[key]);
      });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Component />
        <p>{window.origin}</p>
        <p>{localStorage.length}</p>
        <Authenticator socialProviders={["google"]} />
      </header>
    </div>
  );
}

export default App;
