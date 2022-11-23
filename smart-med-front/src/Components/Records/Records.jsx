import React, { useEffect, useState } from "react";
import { Input, InputNumber, Radio, Space, Table, Tabs, Tag } from "antd";
import "./Records.css";
import { ethers } from "ethers";
import { abi, contractAddress } from "../constants/constant.js";
import { Web3Storage } from "web3.storage";
const { ethereum } = window;
const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI4MDIzMTA4MGZlMjUxOEM4ZWRhNUY3RjU2OTdCMWRiNjUxMmE3OWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njg5NzUyNzkxMzEsIm5hbWUiOiJibG9jayJ9.dAy5cghn8M7qxqJ6C8Mp1U8hMF3X5hWtSrjkEC0yoQ8";

const client = new Web3Storage({ token: apiToken });

export default function Records() {
  const [recordsData, setRecordsData] = useState([]);

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
          setRecordsData((recordsData) => [
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
    setRecordsData([]);
    if (typeof ethereum !== "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(document.getElementById("input").files[0]);
        var fileInput = document.getElementById("input");

        const rootCid = await client.put(fileInput.files);
        console.log(rootCid);
        const setHash = await contract.set(rootCid);
        await setHash.wait(1);
        const updatedHash = await contract.get();
        console.log(updatedHash);
        let exm = [];
        updatedHash.map(async (hash) => {
          const res = await client.get(hash);
          const files = await res.files();
          setRecordsData((recordsData) => [
            ...recordsData,
            {
              hash: hash,
              fileName: files[0].name,
            },
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
  const columns = [
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   key: "name",
    //   render: (text) => <a>{text}</a>,
    // },
    {
      title: "hash",
      dataIndex: "hash",
      key: "hash",
    },
    {
      title: "File Name",
      dataIndex: "fileName",
      key: "fileName",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <a
          href={`https://${record.hash}.ipfs.w3s.link/${record.fileName}`}
          target="_blank"
        >
          View
        </a>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      id: 32,
      file_name: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      id: 42,
      file_name: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      id: 32,
      file_name: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <div className="records-cont">
      <div className="container-medium">
        <div className="records">
          <div className="record-box">
            <div className="record-box-head">
              <div className="record-text">
                <span
                  style={{
                    fontSize: "24px",
                    color: "black",
                    fontWeight: "500",
                  }}
                >
                  Patient Records
                </span>
                <br />
                Record History
              </div>
              <div className="record-submit">
                <button
                  onClick={(e) => {
                    handleUpload(e);
                  }}
                >
                  Submit
                </button>
              </div>
              <div className="record-upload-cont">
                <label for="file">Choose file to upload</label>
                <input type="file" id="input" name="file" />
              </div>
            </div>
            <Table columns={columns} dataSource={recordsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
