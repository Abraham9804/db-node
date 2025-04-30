const express = require("express")
const sequelize = require("./conexion.js")
//Inicializar la app de express
const app = express()

//api rest
app.get("/", function(req, resp){
    resp.send("Hola mundo")
})

app.get("/categoria",async function(req, resp){
    const [results, metadata] = await sequelize.query("select * from categorias")
    const categorias = results
    resp.json(categorias)
})

//Levantar server
app.listen(3000,()=>{
    console.log("Servidor iniciado en localhost:3000")
})