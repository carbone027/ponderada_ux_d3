# ponderada_ux_d3 Bruna - Documentacão
## GAS&ISTAS

### Discussão sobre imagens

Selecionamos as duplas aleatoriamente e, em seguida, discutimos em grupo quais desenhos escolher. Primeiro, optamos por uma imagem que representa o TAE (Tempo de Espera para o Gasista chegar ao local). Depois, selecionamos uma imagem que mostra a distribuição dos gasistas pelo estado de São Paulo para atendimento. Por fim, escolhemos uma versão focada especificamente na cidade de São Paulo.

As três visualizações desempenham um papel fundamental no projeto, e temos certeza de que serão bem utilizadas.


### Duplas:
- PJ: Patrick e João Simão
- EJ: Eduardo e João Carbone
- DG: Davi e Gabriel

# PJ
### GAS&ISTAS - Visualização Interativa de Chamados de Gasistas em SP

Fizemos o desenho sobre os chamados dos gasistas no estado de São Paulo, considerando a cidade de São Paulo como sede central. No projeto, ilustramos que os chamados podem ocorrer em qualquer região do estado.

Fiz uma explicação sobre como visualizar a imagem e executá-la no servidor, além de uma foto do nosso desenho inicial estar dentro da pasta "PJ".

## 🗺️ Descrição da Visualização

A visualização mostra um mapa interativo dos municípios do estado de São Paulo, utilizando dados geográficos no formato GeoJSON. A cidade de São Paulo está destacada com um ponto **amarelo**, representando a sede central de distribuição dos gasistas. As demais cidades atendidas estão marcadas com pontos **vermelhos**, com linhas conectando-as à capital, simulando os chamados.

## ▶️ Como Executar o Projeto

### Requisitos:
- VS Code (de preferência)
- Ter o **Node.js** instalado (opcional)
- Ter o **Python** instalado OU utilizar algum servidor local como `http-server`

### Comando para rodar:

```bash
python -m http.server
```

Depois, acesse no navegador:
```
http://localhost:8000/
```

> Caso use o `http-server` do Node.js:
> ```bash
> npx http-server
> ```

## 🛠️ Tecnologias Utilizadas

- HTML + CSS
- JavaScript com [D3.js v7](https://d3js.org/)
- GeoJSON dos municípios de SP (`geojs-35-mun.json`)

## 🗃️ Dados

- O arquivo `geojs-35-mun.json` contém os dados geográficos dos municípios do estado de São Paulo.
- Os 20 pontos atendidos são sorteados aleatoriamente a cada execução.
- Esta é uma visualização ilustrativa; 




# EJ

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


# DG

Este projeto é um código HTML que utiliza a biblioteca D3.js para carregar vários arquivos GeoJSON, combiná-los e exibir um mapa de todas as zonas no navegador. Nossa ideia principal é mapear as zonas e exibir os dados de cada uma delas, como o TAE (Tempo de espera para o gasista chegar ao local) e o número de chamadas de emergência. No entanto, não deu tempo de desenvolver tudo isso. Então, ele apenas aparece as zonas no mapa com o D3.js.

**Rascunho do projeto:**

![](./assets/1741895708079.jpg)

**Resultado final:**
![](./assets/mapa_final.png)

- **Objetivo:**  
   Carregar e juntar dados geográficos de múltiplos arquivos GeoJSON para renderizar um mapa usando SVG.

- **Como Funciona:**

  - Define uma lista fixa com os caminhos dos arquivos GeoJSON.
  - Usa `d3.json()` junto com `Promise.all()` para carregar todos os arquivos de forma assíncrona.
  - Combina os dados (features) de cada arquivo em um único objeto GeoJSON.
  - Cria um elemento SVG e renderiza o mapa aplicando uma projeção geográfica.

- **Requisitos:**

  - Navegador moderno.
  - Ter o NodeJS instalado
  - Instalar as dependências (rodar o comando npm install na pasta do projeto)

Para rodar o projeto, basta digitar “npm run dev” com esse comando e ele escutando atualização dos arquivos

O projeto seria ideal para os gestores terem um controle em tempo real das zonas e controlarem o tempo para não levarem multas por atraso.
