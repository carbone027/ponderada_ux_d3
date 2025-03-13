# Mapa de Grafo de São Paulo com D3.js

## Objetivo
Carregar um arquivo GeoJSON contendo os municípios de São Paulo e renderizar um mapa interativo no navegador utilizando SVG e D3.js.

## Como Funciona:

- Define um caminho para o arquivo GeoJSON.
- Usa `d3.json()` para carregar os dados de forma assíncrona.
- Aplica uma projeção geográfica `d3.geoMercator()` para ajustar o mapa ao SVG.
- Renderiza os municípios como caminhos (`<path>`) dentro do SVG.
- Calcula os centros geométricos das cidades e cria conexões entre elas, tendo São Paulo como referência central.
- Exibe os pontos das cidades como círculos (`<circle>`) e cria ligações (`<line>`) entre elas.

## Requisitos:

- Navegador moderno.
- Ter o Node.js instalado.
- Instalar um servidor local para evitar problemas de CORS (exemplo: `http-server`).

Para rodar o projeto, rode o código `python -m http.server 8000` e depois acesse o link `http://localhost:8000/`.