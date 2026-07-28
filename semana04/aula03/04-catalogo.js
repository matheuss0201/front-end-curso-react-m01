const products = [
    { "name": "camiseta","price": 50.50,"category":"roupa"},
    { "name": "tenis","price": 300,"category":"calçado"},
    { "name": "bone","price": 40,"category":"acessório"},
    { "name": "calça","price": 400.99,"category":"roupa"},
]
 const clothes = products.filter((products) => {
    return products.category ==="roupa"
 })
  const names = clothes.map((item) => {
    return item.name
  })

  const total =clothes.reduce ((sum,p)=>{
    return sum + p.price

 }, 0)

  console.log(names);
  console.log(`R$ ${total}`);

  const productsNames = products.map((product)=>{
    return product.name

})
  console.log(productsNames);
  const totalproducts = products.reduce((sum,p)=>{
    return sum +p.price
  },0)

  console.log("R$"+ totalproducts);
  