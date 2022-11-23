import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "../constants/constant.js";
import { Web3Storage } from "web3.storage";
const { ethereum } = window;
const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI4MDIzMTA4MGZlMjUxOEM4ZWRhNUY3RjU2OTdCMWRiNjUxMmE3OWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njg5NzUyNzkxMzEsIm5hbWUiOiJibG9jayJ9.dAy5cghn8M7qxqJ6C8Mp1U8hMF3X5hWtSrjkEC0yoQ8";

const client = new Web3Storage({ token: apiToken });

function Forms() {
  const [recordsData, setRecordsData] = useState([
    {
      hash: "",
      fileName: "",
    },
  ]);

  useEffect(() => {
    (async () => {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const count = await contract.getCount();
      console.log(count);
      console.log(accounts.length);
      if (accounts.length > 0 && count > 0) {
        const updatedHash = await contract.get();
        console.log(updatedHash);
        updatedHash.map(async (hash) => {
          const res = await client.get(hash);
          console.log(hash);
          const files = await res.files();
          console.log(files[0].name);
          setRecordsData([
            ...recordsData,
            { hash: hash, fileName: files[0].name },
          ]);
        });
        console.log(recordsData);
      }
    })();
  }, []);
  async function handleUpload(e) {
    e.preventDefault();
    if (typeof ethereum !== "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(document.getElementById("input").files[0]);
        var fileInput = document.getElementById("input");

        const rootCid = await client.put(fileInput.files);
        console.log(rootCid);
        const res = await client.get(rootCid);
        const files = await res.files();
        const setHash = await contract.set(rootCid);
        await setHash.wait(1);
        const updatedHash = await contract.get();
        console.log(updatedHash);
        updatedHash.map(async (hash) => {
          const res = await client.get(hash);
          const files = await res.files();
          console.log(files[0].name);
          setRecordsData([
            ...recordsData,
            { hash: hash, fileName: files[0].name },
          ]);
        });
        console.log(recordsData);
      } catch (error) {
        console.log(error);
      }
    } else {
      const record = document.getElementsByClassName("record");
      record.innerHTML = "Please install MetaMask";
    }
  }
  return (
    <div className="record">
      <h2>Decentralized file storage system</h2>
      <h1>Hello CodeSandbox</h1>

      <div>
        <label for="file">Choose file to upload</label>
        <input type="file" id="input" name="file" />
      </div>
      <div>
        <button onClick={handleUpload}>Submit</button>
      </div>
      {recordsData.length > 0 &&
        recordsData.map(({ hash, fileName }, id) => (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={id}
          >
            <h3
              style={{
                marginRight: "10px",
              }}
            >
              {fileName}
            </h3>
            <a
              href={`https://${hash}.ipfs.w3s.link/${fileName}`}
              target="_blank"
              style={{
                marginLeft: "10px",
              }}
            >
              View
            </a>
          </div>
        ))}
    </div>
  );
}

export default Forms;
