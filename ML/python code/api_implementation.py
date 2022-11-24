import json
import requests

url = "http://127.0.0.1:8000/cervical_cancer_prediction"

input_data_for_model = {
    'age' : 52,
    'number_of_sexual_partners' : 5,
    'first_sexual_intercourse' : 16,
    'num_of_pregnancies' : 4,
    'smokes' : 1,
    'smokes_years' : 37,
    'smokes_packs_year' : 37,
    'hormonal_contraceptives' : 1,
    'hormonal_contraceptives_years': 3,
    'iud' : 0,
    'iud_years' : 0,
    'stds' : 0,
    'stds_number' : 0,
    'stds_condylomatosis' : 0,
    'stds_vaginal_condylomatosis' : 0,
    'stds_vulvo_perineal_condylomatosis' : 0,
    'stds_genital_herpes' : 0,
    'stds_molluscum_contagiosum' : 0,
    'stds_syphilis' : 0,
    'stds_pelvic_inflammatory_disease' : 0,
    'stds_hiv' : 0,
    'stds_hepatitis_b' : 0,
    'stds_hpv' : 0,
    'stds_number_of_diagnosis' : 0,
    'dx_cancer' : 1,
    'dx_cin' : 0,
    'dx_hpv' : 1,
    # 'dx' : 0,
    # 'hinselmann' : 0,
    # 'schiller' : 0,
    # 'citology' : 0,
}

input_json = json.dumps(input_data_for_model)

response = requests.post(url, data = input_json)

print(response.text)