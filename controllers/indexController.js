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
    {
        id: crypto.randomUUID(),
        nombre: "Falda de cordero",
        descripcion: "falda de cordero lechal asado, acompañado por un jugo de su propio asado",
        precio: 150.9,
        imagen: "falda-de-cordero-y-espiral-con-ensalada-de-pamplinas.webp"
    },
    {
        id: crypto.randomUUID(),
        nombre: "Pez rey asado",
        descripcion: "Pez rey asado con pil-pil de almejas, nécora y Champagne y una crema fina de avellana y caviar, de Lasarte",
        precio: 120.5,
        imagen: "pez-rey-asado-con-pil-pil-de-almejas-necora-y-champagne-y-una-crema-fina-de-avellana-y-caviar.webp"
    },
    {
        id: crypto.randomUUID(),
        nombre: "Pescadilla de la bahía en amarillo",
        descripcion: "Guiso tradicional típico de las costas de Cádiz",
        precio: 100.5,
        imagen: "pescadilla-de-la-bahia-en-amarillo.webp"
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