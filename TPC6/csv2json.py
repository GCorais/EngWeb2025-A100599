import csv
import json

csv_file = "contratos2024.csv"
json_file = "contratos.json"

data = []

with open(csv_file, encoding="utf-8") as file:
    reader = csv.DictReader(file, delimiter=";", quotechar='"')
    
    for row in reader:
        row["precoContratual"] = float(row["precoContratual"].replace(",", "."))
        data.append(row)

with open(json_file, "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)