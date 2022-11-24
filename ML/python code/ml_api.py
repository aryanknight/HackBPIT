# -*- coding: utf-8 -*-
"""
Created on Wed Nov 23 01:05:46 2022

@author: user

    
    
"""

from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
import ssl
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins=[
    "http://localhost:8000",
    "http://localhost:3000/diagnose",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
class model_input(BaseModel):
    
    age : int
    number_of_sexual_partners : int
    first_sexual_intercourse : float
    num_of_pregnancies : int
    smokes : bool
    smokes_years : float
    smokes_packs_year : int
    hormonal_contraceptives : bool
    hormonal_contraceptives_years: float
    iud : bool
    iud_years : int
    stds : bool
    stds_number : int
    stds_condylomatosis : bool
    stds_vaginal_condylomatosis : bool
    stds_vulvo_perineal_condylomatosis : bool
    stds_genital_herpes : bool
    stds_molluscum_contagiosum : bool
    stds_syphilis : bool
    stds_pelvic_inflammatory_disease : bool
    stds_hiv : bool
    stds_hepatitis_b : bool
    stds_hpv : bool
    stds_number_of_diagnosis : bool
    dx_cancer : bool
    dx_cin : bool
    dx_hpv : bool
    # dx : bool
    # hinselmann : bool
    # schiller : bool
    # citology : bool
    
#importing the saved model
model = pickle.load(open('model_save.sav', 'rb'))

@app.post('/cervical_cancer_prediction')
def cervical_cancer_prediction(input_parameters: model_input):
    
    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)
    
    age = input_dictionary['age']
    nsp = input_dictionary['number_of_sexual_partners']
    fsi = input_dictionary['first_sexual_intercourse']
    nop = input_dictionary['num_of_pregnancies']
    smokes = input_dictionary['smokes'] 
    sy = input_dictionary['smokes_years']
    spy = input_dictionary['smokes_packs_year']
    hc = input_dictionary['hormonal_contraceptives']
    hcy = input_dictionary['hormonal_contraceptives']
    iud = input_dictionary['iud']
    iudy = input_dictionary['iud_years']
    stds = input_dictionary['stds']
    stdn = input_dictionary['stds_number']
    stdc = input_dictionary['stds_condylomatosis']
    stdvc = input_dictionary['stds_vaginal_condylomatosis']
    stdvpc = input_dictionary['stds_vulvo_perineal_condylomatosis']
    sgh = input_dictionary['stds_genital_herpes']
    smc = input_dictionary['stds_molluscum_contagiosum']
    ss = input_dictionary['stds_syphilis']
    spid = input_dictionary['stds_pelvic_inflammatory_disease']
    sh = input_dictionary['stds_hiv']
    shb= input_dictionary['stds_hepatitis_b']
    shpv = input_dictionary['stds_hpv']
    snod = input_dictionary['stds_number_of_diagnosis']
    dxc = input_dictionary['dx_cancer']
    dc = input_dictionary['dx_cin']
    dh = input_dictionary['dx_hpv']
    # dx = input_dictionary['dx']
    # hinsel = input_dictionary['hinselmann']
    # schiller = input_dictionary['schiller']
    # citology = input_dictionary['citology']
# hinsel, schiller, citology
    input_list = [age, nsp, fsi, nop, smokes, sy, spy, hc, hcy, iud, iudy, stds, stds, stdn, stdc, stdvc, stdvpc, sgh, smc, ss, spid, sh, shb, shpv, snod, dxc, dc, dh]

    prediction = model.predict([input_list]);
    return prediction[0]





 








 















