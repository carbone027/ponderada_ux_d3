const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const geojsonDir = path.join(__dirname, "zonas-atendimento");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/geojson-files", (req, res) => {
  fs.readdir(geojsonDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao listar arquivos" });
    }
    const geojsonFiles = files.filter((file) => file.endsWith(".geojson"));
    res.json(geojsonFiles);
  });
});

app.get("/geojson/:filename", (req, res) => {
  const filePath = path.join(geojsonDir, req.params.filename);
  res.sendFile(filePath);
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
