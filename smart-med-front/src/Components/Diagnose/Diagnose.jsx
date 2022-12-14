import React,{useState} from "react";
import axios from "axios";
import { Input, InputNumber, Modal, Radio, Tabs } from "antd";
import "./Diagnose.css";

export default function Diagnose() {
  const [value, setValue] = React.useState(1);
  const [cervicalValue, setCervicalValue] = React.useState({
    age: 0,
    partners: 0,
    age_sex: 0,
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
    stds_vaginal_condylomatosis: 0,
    stds_vulvo_perineal_condylomatosis: 0,
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
  });

  const predict = async () => {
    const data = {
      age: cervicalValue.age,
      number_of_sexual_partners: cervicalValue.partners,
      first_sexual_intercourse: cervicalValue.age_sex,
      num_of_pregnancies: cervicalValue.preg,
      smokes: cervicalValue.smoke,
      smokes_years: cervicalValue.year_smoke,
      smokes_packs_year: cervicalValue.pack_smoke,
      hormonal_contraceptives: cervicalValue.hormonal_contra,
      hormonal_contraceptives_years: cervicalValue.year_contra,
      iud: cervicalValue.iud,
      iud_years: cervicalValue.year_iud,
      stds: cervicalValue.stds,
      stds_number: cervicalValue.num_stds,
      stds_condylomatosis: cervicalValue.condylomatosis,
      stds_vaginal_condylomatosis: cervicalValue.stds_vaginal_condylomatosis,
      stds_vulvo_perineal_condylomatosis:
        cervicalValue.stds_vulvo_perineal_condylomatosis,
      stds_genital_herpes: cervicalValue.herpes,
      stds_molluscum_contagiosum: cervicalValue.contagiosum,
      stds_syphilis: cervicalValue.syphilis,
      stds_pelvic_inflammatory_disease: cervicalValue.pelvic,
      stds_hiv: cervicalValue.hiv,
      stds_hepatitis_b: cervicalValue.hepatitis,
      stds_hpv: cervicalValue.hpv,
      stds_number_of_diagnosis: cervicalValue.num_diag_stds,
      dx_cancer: cervicalValue.diag_cancer,
      dx_cin: cervicalValue.diag_cin,
      dx_hpv: cervicalValue.diag_hpv,
    };
    console.log(data);
    const res = await axios.post(
      "http://localhost:8000/cervical_cancer_prediction",
      JSON.stringify(data)
    );
    console.log(res.data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="diagnose-cont">
      <div className="container-medium" style={{overflow:'visible'}}>
        <div className="diagnose" style={{overflow:'visible'}}>
          <Modal title="Predict Disease Possibility" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div style={{fontSize:'18px'}}>
            The Machine Learning Model has been created but not deployed, please check the ML and ML Model Folder
            </div>
             
        </Modal>
          <Tabs defaultActiveKey="1" size="large" style={{ color: "#686868" }}>
            <Tabs.TabPane tab="Cervical Cancer" key="1">
              <div className="diagnose-cont-1">
                <div className="diagnose-text-cont">
                  Cervical cancer is a type of cancer that occurs in the cells
                  of the cervix ??? the lower part of the uterus that connects to
                  the vagina. Early on, cervical cancer usually doesn???t have
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, age: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">No of sexual partners : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, partners: val })
                      }
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, age_sex: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">No of pregnencies : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, preg: val })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">Do you smoke : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          smoke: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, year_smoke: val })
                      }
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, pack_smoke: val })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you take any hormonal contraceptives? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hormonal_contra: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have any Intra-Urine Devices (IUDs)? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          iud: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, year_contra: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Years taking IUDs : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, year_iud: val })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">Do you have any STDs? : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          stds: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, num_stds: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have condylomatosis? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          condylomatosis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have vaginal condylomatosis? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          condylomatosis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have vulvao perineal condylomatosis? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          condylomatosis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Do you have syphilis? : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          syphilis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have any pelvic inflamatory disease? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          pelvic: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have genital herpes? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          herpes: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have molluscum contagiosum? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          contagiosum: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Do you have HIV? : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hiv: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have HepatitisB? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hepatitis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">
                      Do you have Human Papillomavirus (HPV)? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hpv: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          num_diag_stds: val,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had a diagnosis of cancer? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_cancer: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had diagnosis of CIN? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_cin: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had a diagnosis of HPV? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_hpv: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Diagnosed with other major reproductive issue? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_other: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <button onClick={showModal} className="diag-submit-btn">Predict Possibility of Cervical Cancer</button>
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane tab="PCOS" key="2">
              <div className="diagnose-cont-1">
                <div className="diagnose-text-cont">
                  Polycystic ovary syndrome (PCOS) is a problem with hormones
                  that happens during the reproductive years. If you have PCOS,
                  you may not have periods very often. Or you may have periods
                  that last many days. You may also have too much of a hormone
                  called androgen in your body.
                  <br />
                  <br />
                  Symptoms of PCOS often start around the time of the first
                  menstrual period. Sometimes symptoms develop later after you
                  have had periods for a while.
                  <br />
                  <br />
                  The symptoms of PCOS vary. A diagnosis of PCOS is made when
                  you have at least two of these:
                  <br />
                  <ul className="a" style={{ listStyleType: "disc" }}>
                    <li>1. Irregular periods</li>
                    <li>2. Too much androgen</li>
                    <li>3. Polycystic Ovaries</li>
                  </ul>
                  <br />
                  <br />
                  PCOS signs and symptoms are typically more severe in people
                  with obesity.
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Age : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={cervicalValue.age}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, age: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">No of sexual partners : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, partners: val })
                      }
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, age_sex: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">No of pregnencies : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, preg: val })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">Do you smoke : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          smoke: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, year_smoke: val })
                      }
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, pack_smoke: val })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you take any hormonal contraceptives? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hormonal_contra: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have any Intra-Urine Devices (IUDs)? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          iud: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, year_contra: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Years taking IUDs : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, year_iud: val })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">Do you have any STDs? : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          stds: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, num_stds: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have condylomatosis? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          condylomatosis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have vaginal condylomatosis? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          condylomatosis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have vulvao perineal condylomatosis? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          condylomatosis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Do you have syphilis? : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          syphilis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have any pelvic inflamatory disease? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          pelvic: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have genital herpes? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          herpes: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have molluscum contagiosum? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          contagiosum: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Do you have HIV? : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hiv: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have HepatitisB? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hepatitis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">
                      Do you have Human Papillomavirus (HPV)? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hpv: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          num_diag_stds: val,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had a diagnosis of cancer? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_cancer: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had diagnosis of CIN? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_cin: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had a diagnosis of HPV? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_hpv: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Diagnosed with other major reproductive issue? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_other: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <button onClick={showModal} className="diag-submit-btn">Predict Possibility of PCOS</button>
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Breast Cancer" key="3">
              <div className="diagnose-cont-1">
                <div className="diagnose-text-cont">
                  Breast cancer is cancer that forms in the cells of the
                  breasts. After skin cancer, breast cancer is the most common
                  cancer diagnosed in women in the United States. Breast cancer
                  can occur in both men and women, but it's far more common in
                  women.
                  <br />
                  <br />
                  Signs and symptoms of breast cancer may include:-
                  <br />
                  <ul className="a" style={{ listStyleType: "disc" }}>
                    <li>
                      1. A breast lump or thickening that feels different from
                      the surrounding tissue
                    </li>
                    <li>
                      2. Change in the size, shape or appearance of a breast
                    </li>
                    <li>
                      3. Changes to the skin over the breast, such as dimpling
                    </li>
                    <li>4. A newly inverted nipple</li>
                    <li>
                      5. Peeling, scaling, crusting or flaking of the pigmented
                      area of skin surrounding the nipple (areola) or breast
                      skin
                    </li>
                    <li>
                      6. Redness or pitting of the skin over your breast, like
                      the skin of an orange
                    </li>
                  </ul>
                  <br />
                  <br />
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Age : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={cervicalValue.age}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, age: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">No of sexual partners : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, partners: val })
                      }
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, age_sex: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">No of pregnencies : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, preg: val })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">Do you smoke : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          smoke: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, year_smoke: val })
                      }
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, pack_smoke: val })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you take any hormonal contraceptives? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hormonal_contra: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have any Intra-Urine Devices (IUDs)? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          iud: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, year_contra: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Years taking IUDs : </div>
                    <InputNumber
                      size="large"
                      placeholder="Age"
                      defaultValue={0}
                      style={{ width: "100%" }}
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, year_iud: val })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">Do you have any STDs? : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          stds: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({ ...cervicalValue, num_stds: val })
                      }
                    />
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have condylomatosis? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          condylomatosis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have vaginal condylomatosis? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          condylomatosis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have vulvao perineal condylomatosis? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          condylomatosis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Do you have syphilis? : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          syphilis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have any pelvic inflamatory disease? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          pelvic: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have genital herpes? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          herpes: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have molluscum contagiosum? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          contagiosum: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">Do you have HIV? : </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hiv: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Do you have HepatitisB? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hepatitis: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-2">
                    <div className="input-title">
                      Do you have Human Papillomavirus (HPV)? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          hpv: val.target.value,
                        })
                      }
                    >
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
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          num_diag_stds: val,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="diagnose-box-cont">
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had a diagnosis of cancer? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_cancer: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had diagnosis of CIN? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_cin: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Have you ever had a diagnosis of HPV? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_hpv: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div className="diagnose-box-cont-1">
                    <div className="input-title">
                      Diagnosed with other major reproductive issue? :{" "}
                    </div>
                    <Radio.Group
                      onChange={(val) =>
                        setCervicalValue({
                          ...cervicalValue,
                          diag_other: val.target.value,
                        })
                      }
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={0}>No</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <button onClick={showModal} className="diag-submit-btn">Predict Possibility of Breast Cancer</button>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
