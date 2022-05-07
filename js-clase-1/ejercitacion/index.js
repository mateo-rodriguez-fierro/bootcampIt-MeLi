/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá

function calculatePrice(product, productCost){
	let shippingCost;
	let totalCost
	let baseCost=productCost

	if (productCost< 2000 && productCost>1)
	{
		shippingCost=300;
	}
	else if (productCost> 2001 && productCost <4000)
	{
		shippingCost=500;
	}
	else if ( productCost >4000)
	{
		shippingCost=700;
	}
	else if (productCost==undefined|| product==undefined)
	{
		return `ingresar ambos parámetros`
	}
	if (productCost<=0)
	{
		return `Error`
	}


	productCost=productCost+shippingCost

	return `El producto ${product} cuesta ${baseCost} . Su costo de envío es de ${shippingCost} . Por lo tanto, el precio final es de ${productCost}`
	

}

module.exports = {
	calculatePrice,
};
