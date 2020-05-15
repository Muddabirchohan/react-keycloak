import Keycloak from "keycloak-js";

// // Setup Keycloak instance as needed
// // Pass initialization options as required or leave blank to load from 'keycloak.json'
// const keycloak = new Keycloak("./keycloak.json");

// export default keycloak;

let initOptions = {
  url: "http://localhost:8080/auth",
  realm: "REALM001",
  clientId: "node-client",
  onLoad: "login-required",
};

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    localStorage.setItem("react-token", keycloak.token);

    console.info("Authenticated", keycloak);
    debugger;
  }
});

export default keycloak;
