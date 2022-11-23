# -*- coding: utf-8 -*-
"""
Created on Wed Nov 23 01:05:46 2022

@author: user

    
    
"""

from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json


app = FastAPI()

class model_input(BaseModel):
    
    age : int
    number_of_sexual_partners : int()
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
    stds_vulvo_perineal_condylomatosis : bool
    stds_syphilis : bool
    stds_pelvic_inflammatory_disease : bool
    stds_hiv : bool
    stds_hepatitis_b : bool
    stds_hpv : bool
    stds_number_of_diagnosis : bool
    stds_cancer : bool
    dx_cin : bool
    dx_hpv : bool
    dx : bool
    hinselmann : bool
    schiller : bool
    citology : bool
    
#importing the saved model
model = pickle.load(open('model_save.sav', 'rb'))

@app.post('/cervical_cancer_prediction')
def cervical_cancer_prediction(input_parameters: model_input):
    
    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)
    
    age = input_dictionary['age']
    nsp = input_dictionary['number_of_sexual_partners']
    fsi = input_dictionary['first_sexual_intercourse']
    fsi = input_dictionary['num_of_pregnancies']
    fsi = input_dictionary['smokes']
    fsi = input_dictionary['smokes_years']
    fsi = input_dictionary['smokes_packs_year']
    fsi = input_dictionary['hormonal_contraceptives']
    fsi = input_dictionary['hormonal_contraceptives']
    fsi = input_dictionary['iud']
    fsi = input_dictionary['iud_years']
    fsi = input_dictionary['stds']
    fsi = input_dictionary['']
    fsi = input_dictionary['']




