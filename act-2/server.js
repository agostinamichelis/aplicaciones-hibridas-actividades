import express from "express";
import path from "path";
import productosRoutes from "./routes/productos.js";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/productos', productosRoutes);

const stacks = [
{id: 1, nombre: "MONGODB"},
{id: 2, nombre: "EXPRESS"},
{id: 3, nombre: "REACT"},
{id: 4, nombre: "NODE"},
{id: 5, nombre: "JAVASCRIPT"},
];

app.get("/", (req, res) =>{
    res.send("Hola! Soy Agostina Michelis")
})
app.get("/materia", (req, res) =>{
    res.send("Aplicaciones Híbridas | LUN & JUE 21:10hs - 23:00hs")
})
app.get("/profesor", (req, res) =>{
    res.send("Profesora: Camila Belén Marcos Galban")
})
app.get("/404", (req, res) =>{
    res.send("404 Not Found")
})

app.get("/stack", (req, res) => {
    // let {carrera} = req.query;
    let stack = req.query.nombre;
    if(stack == "MONGODB" || stack == "EXPRESS" || stack === "REACT" || stack == "NODE" || stack == "JAVASCRIPT"){
    let filtrarStacks = stacks.filter(u => u.nombre === stack);
    res.send(filtrarStacks);
    } else{
        res.send("a leer la documentacion entonces..");
    }
})


app.listen(2023, function(){
    console.log("Funciona");
});