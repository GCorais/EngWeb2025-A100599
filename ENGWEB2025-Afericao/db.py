import json
import ast
import re

json_file = "dataset.json"
output_file = "livros.json"

with open(json_file, encoding="utf-8") as file:
    data = json.load(file)  

for row in data:
    for key in ["characters", "genres", "awards", "ratingsByStars", "setting"]:
        if key in row and isinstance(row[key], str):  
            row[key] = ast.literal_eval(row[key])  

    for key in row:
        if isinstance(row[key], str):
            row[key] = re.sub(r'[\u2028\u2029]', '', row[key])

with open(output_file, "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print("Conversão concluída com sucesso!")
