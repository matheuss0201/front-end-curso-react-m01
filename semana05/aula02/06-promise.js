function checkStock(quantity){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(quantity > 0){
                resolve(`em estoque: ${quantity} unidade(s),`)
        
            }else{
                reject("produdo esgotado !")
            }
        },2000)
 } )
    
}
checkStock(5).then((message) =>{
    console.log(message)
}).catch((error) =>{
    console.log(error)
})


checkStock(0).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})

