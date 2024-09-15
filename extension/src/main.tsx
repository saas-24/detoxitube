import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Authenticator } from "@aws-amplify/ui-react";
import KeywordManager from "./components/KeywordManager";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      {/* <App />  */}
      <KeywordManager />
    </Authenticator.Provider>
  </React.StrictMode>
);
