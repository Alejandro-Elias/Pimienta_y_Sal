const crypto = require("crypto");

const menu = [
    {
        id: crypto.randomUUID(),
        nombre: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        precio: 65.50,      
        imagen: "Carpaccio-de-salmon.jpg"  
    },
    {
        id: crypto.randomUUID(),
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: 47.00,
        imagen: "Risotto-berenjena-queso-cabra.jpg"
    },
    {
        id: crypto.randomUUID(),
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: 27.50,
        imagen: "Mousse-de-arroz-con-leche.jpg"
    },
    {
        id: crypto.randomUUID(),
        nombre: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: 37.50,
        imagen: "esparragos.png"
    },
    {
        id: crypto.randomUUID(),
        nombre: "Asado Criollo",
        descripcion: null,
        precio: 100.5,
        imagen: "mitad-parrilla-mitad-filetes-crudos-parrilla.jpg"
    },
]

module.exports = {
    index: (req, res) => {
        return res.render("index", { menu })
    },

    detail: (req, res) => {

        const {id} = req.params

        const item = menu.find(item => item.id === id)

        return res.render("detalleMenu", {item})
    }
}