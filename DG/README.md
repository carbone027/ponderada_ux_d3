Este projeto é um código HTML que utiliza a biblioteca D3.js para carregar vários arquivos GeoJSON, combiná-los e exibir um mapa de todas as zonas no navegador.

* **Objetivo:**  
   Carregar e juntar dados geográficos de múltiplos arquivos GeoJSON para renderizar um mapa usando SVG.

* **Como Funciona:**

  * Define uma lista fixa com os caminhos dos arquivos GeoJSON.  
  * Usa `d3.json()` junto com `Promise.all()` para carregar todos os arquivos de forma assíncrona.  
  * Combina os dados (features) de cada arquivo em um único objeto GeoJSON.  
  * Cria um elemento SVG e renderiza o mapa aplicando uma projeção geográfica.  
* **Requisitos:**

  * Navegador moderno.  
  * Ter o NodeJS instalado  
  * Instalar as dependências (rodar o comando npm install na pasta do projeto)

Para rodar o projeto, basta digitar “npm run dev” com esse comando e ele escutando atualização dos arquivos

Este projeto é ideal para quem precisa exibir dados geográficos combinados de diversos arquivos em uma página web de forma simples e rápida.

