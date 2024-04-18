import express from "express";
const router = express.Router();
import {promises} from 'fs';

router.get("/", (req, res) => {
    promises.readFile("./data/productos.json")
    .then((data) => {
        const productos = JSON.parse(data);
        res.status(200).json(productos) // el .json(personajes equivale al res.send)
    })
    .catch((error) => {
        console.log(error.message);
        res.json({errorCode: 3435, msg: error.message});
    });
});
router.get("/:id", (req, res) => {
    promises.readFile("./data/productos.json")
    .then((data) => {
        const productos = JSON.parse(data);
        const producto = productos.find(p => p.id == req.params.id);
        if(producto){
            res.status(200).json(producto);
        } else{
            res.status(404).json({errorCode: 3435, msg: "Producto no encontrado."});
        }
    })
    .catch((error) => {
        console.log(error.message);
        res.json({errorCode: 3435, msg: error.message});
    });
});

router.get("/:id", (req, res) => {
    promises.readFile("./data/productos.json")
    .then((data) => {
        const productos = JSON.parse(data);
        const producto = productos.find(p => p.id == req.params.id);
        if(producto){
            res.status(200).json(producto);
        } else{
            res.status(404).json({errorCode: 3435, msg: "Producto no encontrado."});
        }
    })
    .catch((error) => {
        console.log(error.message);
        res.json({errorCode: 3435, msg: error.message});
    });
});


export default router;