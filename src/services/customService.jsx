let customPizza = {masa:"",salsa:"", ingredientes:[], queso:""};


export function setMasa(type){
    customPizza.masa = type;
    return customPizza;
}

export function setSalsa(type){
    customPizza.salsa = type;
    return customPizza;
}

export function setQueso(type){
    customPizza.queso = type;
    return customPizza;
}

export function addIngrediente(type){
    customPizza.ingredientes.push(type)
    return customPizza;
}

export function removeIngrediente(type){
    customPizza.ingredientes = customPizza.ingredientes.filter(ingrediente => ingrediente != type);
    return customPizza;
}

export function getCustomPizza(){
    return customPizza;
}