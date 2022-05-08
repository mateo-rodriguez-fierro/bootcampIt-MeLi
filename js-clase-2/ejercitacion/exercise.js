const {products}= require('../ejercitacion/utils/products');

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá

function addingIdToProduct(){
/* 	let addingIdToProduct=[];
 */
	
	products.forEach((item, i)=>{
		
		item.id=i+1
	/* 	addingIdToProduct.push(products[i].id) */
 
	})
/* 	console.log(products)
	console.log(addingIdToProduct)
 */	
	return products
	
}





/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá
function returningTheNames(){
	let returningTheNames=[]
	for (props in products)
	{
		console.log(products[props].name)
		returningTheNames.push(products[props].name)
	}

	return returningTheNames.length

}



 

/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá
function searchID(idCheck){
	//console.log(idCheck)
	for (props in products)
	{
		if (idCheck=== products[props].id)
		{
			//console.log(products[idCheck])
			return products[idCheck-1]
		}
		if (idCheck>products.length)
		{
			return 'no hubo coincidencias'
		}
	}


}




/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá

function matchingColors(colorMatch){
	//console.log(colorMatch)
}



/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá

function colorsLength()
{

}



/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá
function addProduct(addProducts){
	//console.log(addProducts)

	if (addProducts.name==null || addProducts.colors==null || addProducts.quantity==null || addProducts.price==null )
	{
		return 
	}
	else{
		products.push(addProducts)

	}
}




/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá
function deleteProduct(){
/* 	console.log(products[props])
	console.log(products[props].quantity)
 */	
	console.log('antes',products)
	for (props in products)
	{
		//let quantity=products[props].quantity;
		let index =products.findIndex(product =>product.quantity ===0)
		console.log('index; ',index)
		if (products[props].quantity==0)
		{
			products.splice(index,1)
		}
		
	}
	console.log('despues',products[props])
}




/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá
function existingProducts(){
	let sumOfStock=0;
	for (props in products)
	{
		//console.log(products[props].quantity)
		sumOfStock +=products[props].quantity
		console.log(sumOfStock)
	}
	return sumOfStock
}





/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá
function showHigherPrice(){
	let savePrice=[]
	for (props in products)
	{
		savePrice.push(products[props].price)
	}
	savePrice.sort(function(a, b){return a - b})
	console.log(Math.max(...savePrice))
	return Math.max(...savePrice)

}





module.exports = {
	addingIdToProduct,
	existingProducts,
	deleteProduct,
	addProduct,
	colorsLength,
	matchingColors,
	searchID,
	returningTheNames,
	showHigherPrice,
};