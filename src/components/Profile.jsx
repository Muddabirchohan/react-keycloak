import React, { Component } from "react";
import axios from "axios";
import keycloak from "./../keycloak";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log("kc", keycloak);
    // if (!keycloak.authenticated) {
    //   keycloak.login();
    // }
    // keycloak.login();
    // keycloak.success((auth) => {
    //   if (!auth) {
    //     window.location.reload();
    //   } else {
    //     console.info("Authenticated");
    //   }
    // });
  }

  getCurrentUSer() {
    this.setState({
      user: keycloak.idTokenParsed,
    });
  }

  sendRequest() {
    keycloak.logout();
    // axios
    //   .get("http://localhost:8000/service/secured")
    //   .then((res) => {
    //     console.log("resa", res);
    //     if (res?.data?.message) {
    //       this.setState({ status: res.data.message });
    //     } else {
    //       this.setState({ status: "not secured" });
    //     }
    //   })

    //   .catch((e) => {
    //     console.log("er", e);
    //   });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        wellcome User <br />
        <button onClick={() => this.getCurrentUSer()}> getUserDetails </button>
        <button onClick={() => this.sendRequest()}> logout </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p>{user?.name}</p>
        </div>
      </div>
    );
  }
}
