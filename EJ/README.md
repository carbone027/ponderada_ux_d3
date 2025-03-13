
- **Objetivo:**  
   Carregar e juntar dados geográficos de múltiplos arquivos GeoJSON para renderizar um mapa usando SVG.
## Como Funciona:

- Define um caminho para o arquivo GeoJSON.
- Usa `d3.json()` para carregar os dados de forma assíncrona.
- Aplica uma projeção geográfica `d3.geoMercator()` para ajustar o mapa ao SVG.
- Exibe a cidade de São Paulo com os seus bairros.
- Os pontos azuis são os gasistas e o pontos vermelhos são os chamados 

## Requisitos:


- Navegador moderno.
- Ter o Node.js instalado.
- Instalar um servidor local para evitar problemas de CORS (exemplo: `http-server`).

Para rodar o projeto, rode o código `python -m http.server 8000` e depois acesse o link `http://localhost:8000/`.