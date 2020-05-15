import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import { KeycloakProvider } from "@react-keycloak/web";

function App() {
  return (
    // <KeycloakProvider keycloak={keycloak}>
    <div className="App">
      <Profile />
    </div>
    // </KeycloakProvider>
  );
}

export default App;
