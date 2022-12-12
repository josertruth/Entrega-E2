// E1 y E2 JAVASCRIPT


const form = document.querySelector ("#form")
const input = document.getElementById('input')
const btn = document.querySelector("#btn")
const caja = document.querySelector("#caja")

const search = () => {
    const pizzas = [
        {
            id: 1,
            nombre: "Pepequeso",
            precio: 250,
            ingredientes: ["Queso", "Salsa napolitana", "Oliva", "Peperoni"],
        },
        {
            id: 2,
            nombre: "Pizzaña",
            precio: 800,
            ingredientes: ["Tomate", "Queso", "Piña", "Cebolla"]
        },
        {
            id: 3,
            nombre: "Pizzatables",
            precio: 500,
            ingredientes: ["Tomate", "Salsa napolitana", "Cebolla", "Pimenton", "Aceitunas"]
        },
        {
            id: 4,
            nombre: "Pizzason",
            precio: 900,
            ingredientes: ["Salsa napolitana", "Queso", "tocineta", "Pimenton", "Maiz", "Aceitunas"]
        },
        {
            id: 5,
            nombre: "Pizzaneta",
            precio: 550,
            ingredientes: ["Queso", "Salsa napolitana", "Tocineta", "Tomate"]
        },
        {
            id: 6,
            nombre: "Pizzaton",
            precio: 350,
            ingredientes: ["Queso", "Salsa napolitana", "Tomate", "Pimenton", "Pimenton"]
        },
        {
            id: 7,
            nombre: "Pizzallina",
            precio: 1100,
            ingredientes: ["Salsa", "Tomate", "Queso", "Maiz"]
        }
    ]

    let numberValue = document.getElementById('input').value;


    const result = pizzas.find(pizza => pizza.id.toString().includes(numberValue))

    let valid = false;

    if (numberValue = isEmpty(numberValue)){
        return 	showError(input, "Ingresa el numero de pizza")
    }else if (toNum(numberValue) > 7){
        return 	showError(input, "El numero de pizza no se encuentra en el menu");
    }{
        clearError(input)
        valid = true;
    }

    caja.innerHTML = `<h2>${result.nombre}</h2> <h3>$${result.precio}</h3>`
}



const showError = (input, message) => {
	const formField = input.parentElement;
	form.classList.remove("success");
	form.classList.add("error");
	const error = formField.querySelector("small");
	error.textContent = message;
    caja.innerHTML = "";
};

const clearError = (input) => {
	const formField = input.parentElement;
	form.classList.remove("error");
	const error = formField.querySelector("small");
	error.textContent = "";
};

const isEmpty = (value) => {
    return !value.length
}

let toNum = () => parseInt(input.value)

const inputValue = (e) => {

    e.preventDefault()
    search()
    input.value = ""
} 

form.addEventListener("submit", inputValue)

// const inputValue = (e) => {

//     e.preventDefault()
//     const  catcheo = input.value
//     console.log(catcheo);
//     input.value = ""
// } 














// // Pizzas Id Par 

// const pizzaPares = pizzas.filter( (pizza) => {
//     return pizza.id % 2 !== 0
// } )

// pizzaPares.forEach( (pizza) => {
//     console.log( `La pizza ${pizza.nombre} tiene un id impar` );
// } )

// // Pizzas menores a 600 

// const pizzaBarata = (precio) => {
//     return pizzas.some ( (pizza) => {
//         return pizza.precio < 600
//     } )
//     ? console.log(`Si hay pizzas menor a 600`) : console.log(`No hay pizzas menor a 600`);;
// }

// pizzaBarata()

// // Nombre de cada pizza con su precio 

// const menuPizza = pizzas.map ( (pizza) => {
//     return {...pizza}
// } )

// menuPizza.forEach( (pizza) => {
//     console.log(`La pizza ${pizza.nombre} tiene un precio de $ ${pizza.precio}`);
// } )

// // Imprimir las pizzas con sus ingredientes

// pizzas.forEach( (pizza) => {
//     console.log(`Los ingredientes de la pizza ${pizza.nombre} son:`);
//     pizza.ingredientes.forEach ((ingrediente) => {
//         console.log(ingrediente);
//     } )
// } )