import React from "react";
import { useEffect } from "react";
const { ethereum } = window;
function Header() {
  useEffect(() => {
    (async () => {
      const connectButton = document.getElementById("connectButton");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        connectButton.innerHTML = "Connected";
      }
    })();
  }, []);
  async function connect(e) {
    e.preventDefault();
    const connectButton = document.getElementById("connectButton");

    if (typeof ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.log(error);
      }
      connectButton.innerHTML = "Connected";
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
    } else {
      connectButton.innerHTML = "Please install MetaMask";
    }
  }
  return (
    <div>
      <button id="connectButton" onClick={connect}>
        Connect
      </button>
    </div>
  );
}

export default Header;
