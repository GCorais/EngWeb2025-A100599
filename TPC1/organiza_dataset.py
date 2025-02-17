import json

# Carregar dados do ficheiro JSON original
with open("dataset_reparacoes.json", "r", encoding="utf-8") as file:
    data = json.load(file)

viaturas = {}
reparacoes = []
intervencoes = {}

# Processar dados
for idx, reparacao in enumerate(data["reparacoes"], start=1):
    cliente = {
        "nome": reparacao["nome"],
        "nif": reparacao["nif"],
        "data": reparacao["data"]
    }
    
    viatura_info = reparacao["viatura"]
    matricula = viatura_info["matricula"]
    
    # Definir a matrícula como ID da viatura
    if matricula not in viaturas:
        viaturas[matricula] = {
            "id": matricula,  # Agora a matrícula será o ID
            "marca": viatura_info["marca"],
            "modelo": viatura_info["modelo"],
            "reparacoes": []
        }
    
    reparacao_id = f"R{idx}"
    reparacao_obj = {
        "id": reparacao_id,
        "cliente": cliente,
        "viatura": matricula,
        "nr_intervencoes": reparacao["nr_intervencoes"],
        "intervencoes": []
    }
    
    viaturas[matricula]["reparacoes"].append(reparacao_id)
    
    for intervencao in reparacao["intervencoes"]:
        codigo = intervencao["codigo"]  # Aqui estamos extraindo o código corretamente
        
        # Verificar se já existe a intervenção, caso contrário, adicionar
        if codigo not in intervencoes:
            # Atribuir nome e descrição vindos do próprio dataset
            intervencao_nome = intervencao.get("nome", f"Nome da intervenção {codigo}")
            intervencao_descricao = intervencao.get("descricao", f"Descrição da intervenção {codigo}")
            
            intervencoes[codigo] = {
                "id": f"I{len(intervencoes) + 1}",
                "nome": intervencao_nome,  # Usando o nome da intervenção do dataset
                "descricao": intervencao_descricao,  # Usando a descrição da intervenção do dataset
                "reparacoes": []
            }

        reparacao_obj["intervencoes"].append(intervencoes[codigo]["id"])
        intervencoes[codigo]["reparacoes"].append(reparacao_id)

    reparacoes.append(reparacao_obj)  # Agora reparacoes é uma lista

# Criar um único ficheiro JSON consolidado
dados_organizados = {
    "viaturas": list(viaturas.values()),  # Converter dicionário de viaturas numa lista
    "reparacoes": reparacoes,  # Reparações já está em formato de lista
    "intervencoes": list(intervencoes.values())  # Converter dicionário de intervenções numa lista
}

with open("dados_organizados.json", "w", encoding="utf-8") as file:
    json.dump(dados_organizados, file, indent=4, ensure_ascii=False)

print("Ficheiro JSON consolidado gerado com sucesso!")
