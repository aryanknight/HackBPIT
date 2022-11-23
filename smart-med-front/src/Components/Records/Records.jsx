import React from "react";
import { Input, InputNumber, Radio, Space, Table, Tabs, Tag } from "antd";
import "./Records.css";

export default function Records() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Patient ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'File Name',
          dataIndex: 'file_name',
          key: 'file_name',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              View
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          id: 32,
          file_name: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          id: 42,
          file_name: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          id: 32,
          file_name: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
  
  return (
    <div className="records-cont">
      <div className="container-medium">
        <div className="records">
            <div className="record-box">
                <div className="record-box-head">
                    <div className="record-text">
                        <span style={{fontSize:'24px',color:'black',fontWeight:'500'}}>Patient Records</span><br/>
                        Record History
                    </div>
                    <div className="record-btn">
                        Upload Document
                    </div>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
      </div>
    </div>
  );
}
