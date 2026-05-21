import express from "express";

const app = express ();

app.get ("/", (req, res) => {
    res.send ("Primer ejercicio de servidor básico");
});

app.get ("/ping", (req, res) => {
    res.send ("Hola, pong");
});

const PORT = 3000; 

app.listen(PORT, () => { 
    console.log(`Servidor en http://localhost:${PORT}`); 
});