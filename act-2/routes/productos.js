import express from "express";
const router = express.Router();
import {promises} from 'fs';

router.get("/", (req, res) => {
    promises.readFile("./data/productos.json")
    .then((data) => {
        const productos = JSON.parse(data);

        let productosFiltrados = productos;

        if (req.query.minimo && !isNaN(req.query.minimo)) {
            productosFiltrados = productosFiltrados.filter(producto => producto.precio >= parseInt(req.query.minimo));
        }

        if (req.query.maximo && !isNaN(req.query.maximo)) {
            productosFiltrados = productosFiltrados.filter(producto => producto.precio <= parseInt(req.query.maximo));
        }

        res.status(200).json(productosFiltrados) // el .json(personajes equivale al res.send)
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