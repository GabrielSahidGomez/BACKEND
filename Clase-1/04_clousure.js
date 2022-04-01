
//"hola"  +  "Gabriel"
function saludar(saludo){
    return function(nombre){
        return saludo + " "  + nombre
    }
}

let saludarFinal = saludar("HolaMiVida")

console.log(saludarFinal("Angie"))