import pandas as pd
import numpy as np
import os
import json

file_path = os.path.join( os.getcwd(), 'fsaea-docs', 'BOM Catalog.xlsx' )

# Load the Excel file
excel_file = pd.ExcelFile(file_path)
# Get the sheet names
sheet_names = excel_file.sheet_names[1:] # skip first page

# Iterate over each sheet
for sheet_name in sheet_names:
    # Load the sheet into a DataFrame
    sheet = pd.read_excel(excel_file, sheet_name=sheet_name)
    # Drop the first column
    sheet = sheet.iloc[:, 1:]
    # Replace NaN values with null
    sheet = sheet.where(pd.notnull(sheet), "None")
    
    # Specify the output JSON file path
    
    json_file = 'server/db/catalog/'+f'{sheet_name.lower()}.json'
    # List to store JSON objects
    json_objects = []

    # Loop through each row of the DataFrame
    for _, row in sheet.iterrows():

        row_dict = row.to_dict()
        formatted_dict = {key.replace('[', '').replace(']', ''): str(value).replace('[', '').replace(']', '') for key, value in row_dict.items()}

        if "Cost" in formatted_dict:
            if formatted_dict["Cost"] == "Needs Calculation" or formatted_dict["Cost"] == "Needs Calc":
                formatted_dict["Cost"] = "None"
            # Append the dictionary to the list
        json_objects.append(formatted_dict)

    # Write JSON objects to a JSON file
    with open(json_file, 'w') as json_file:
        json.dump(json_objects, json_file, indent=4)

    print("JSON file has been created successfully.")