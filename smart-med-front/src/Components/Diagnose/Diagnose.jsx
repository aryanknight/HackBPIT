import React from "react";
import { Input, InputNumber, Radio, Tabs } from "antd";
import "./Diagnose.css";

export default function Diagnose() {
  const [value, setValue] = React.useState(1);
  const [cervicalValue, setCervicalValue] = React.useState({
    age: 0,
    partners: 0,
    age_sex:0,
    preg: 0,
    smoke: 0,
    year_smoke: 0,
    pack_smoke: 0,
    hormonal_contra: 0,
    iud: 0,
    year_contra: 0,
    year_iud: 0,
    stds: 0,
    num_stds: 0,
    condylomatosis: 0,
    syphilis: 0,
    pelvic: 0,
    herpes: 0,
    contagiosum: 0,
    hiv: 0,
    hepatitis: 0,
    hpv: 0,
    num_diag_stds: 0,
    diag_cancer: 0,
    diag_cin: 0,
    diag_hpv: 0,
    diag_other: 0,
  });
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="diagnose-cont">
      <div className="container-medium">
        <div className="diagnose">
          <Tabs defaultActiveKey="1" size="large" style={{ color: "#686868" }}>
            <Tabs.TabPane tab="Cervical Cancer" key="1">
              <div className="diagnose-cont-1">
                <div className="diagnose-text-cont">
                  Cervical cancer is a type of cancer that occurs in the cells
                  of the cervix — the lower part of the uterus that connects to
                  the vagina. Early on, cervical cancer usually doesn’t have
                  symptoms, making it hard to detect. Symptoms usually begin
                  after the cancer has spread.
                  <br />
                  <br />
                  When symptoms of early-stage cervical cancer do occur, they
                  may include -<br />
                  <ul className="a" style={{ listStyleType: "disc" }}>
                    <li>1. Vaginal bleeding after menopause</li>
                    <li>
                      2. Vaginal bleeding between periods or periods that are
                      heavier or longer than normal
                    </li>
                    <li>
                      3. Vaginal discharge that is watery and has a strong odor
                      or that contains blood
                    </li>
                  </ul>
                  <br />
                  <br />
                  Symptoms of advanced cervical cancer (cancer has spread beyond
                  the cervix to other parts of the body) may include the
                  symptoms of early-stage cervical cancer and
                  <br />
                  <ul>
                    <li>
                      1. Difficult or painful bowel movements or bleeding from
                      the rectum when having a bowel movement
                    </li>
                    <li>
                      2. Difficult or painful urination or blood in the urine
                    </li>
                    <li>3. Dull backache</li>
                    <li>4. Swelling of the legs</li>
                    <li>5. Pain in the abdomen</li>
                    <li>6. Feeling tired</li>
                  </ul>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Age : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={cervicalValue.age}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,age:val})}
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">No of sexual partners : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,partners:val})}
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Age of first sexual intercourse :{" "}
                    </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,age_sex:val})}
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">No of pregnencies : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,preg:val})}
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">Do you smoke : </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,smoke:val.target.value})} >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      No of years for which you have been smoking :{" "}
                    </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,year_smoke:val})}
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      No of packets of cigarettes you smoke per year :{" "}
                    </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,pack_smoke:val})}
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you take any hormonal contraceptives? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,hormonal_contra:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have any Intra-Urine Devices (IUDs)? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,iud:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Years taking Hormonal Contraceptive :{" "}
                    </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,year_contra:val})}
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Years taking IUDs : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,year_iud:val})}
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">Do you have any STDs? : </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,stds:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Number of STDs you have :{" "}
                    </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,num_stds:val})}
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have condylomatosis? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,condylomatosis:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Do you have syphilis? : </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,syphilis:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have any pelvic inflamatory disease? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,pelvic:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have genital herpes? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,herpes:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have molluscum contagiosum? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,contagiosum:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Do you have HIV? : </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,hiv:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have HepatitisB? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,hepatitis:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">
                      Do you have Human Papillomavirus (HPV)? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,hpv:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Number of Diagnosis of STDs :{" "}
                    </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val)=>setCervicalValue({...cervicalValue,num_diag_stds:val})}
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had a diagnosis of cancer? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,diag_cancer:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had diagnosis of CIN? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,diag_cin:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had a diagnosis of HPV? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,diag_hpv:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Diagnosed with other major reproductive issue? :{" "}
                    </div>
                    <Radio.Group onChange={(val)=>setCervicalValue({...cervicalValue,diag_other:val.target.value})}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="PCOS" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Breast Cancer" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
