let products = require("../utils/mock");
const express = require("express");

const router = express.Router();



/*************************************************************** 
	PUNTO 1
	- Retornar todos los productos del array. “/api/products”,
	Utiliza la variable products que se encuentra en este archivo
 ***************************************************************/
// Tu código acá


router.get("/products",(req,res)=>{
	res.json(products)
})





/****************************************************************
	PUNTO 2
	- Obtener un producto específico mediante su ID “/api/products/:id”
*******************************************************************/
// Tu código acá

router.get("/products/:id",(req,res)=>{
	for (let i=0; i<products.length; i++)
	{
		let idCheck=req.params.id
		if (idCheck== products[i].id)
		{
			console.log(products[i])
			res.json(products[idCheck-1]	)
		}
		if (idCheck>products.length)
		{
			res.status(404).send('error 404 page not found')
		}
	}

})






/**********************************************************************
	PUNTO 3
	- Agregar un nuevo producto “/api/products”
 ***********************************************************************/
// Tu código acá
router.post('/products',(req,res)=>{

	if (addProducts.name==null || addProducts.colors==null || addProducts.quantity==null || addProducts.price==null )
	{
		return 
	}
	else{
		products.push(addProducts)
	
	}
})






/************************************************************************
	PUNTO 4
	Cambiar alguna propiedad de un producto en particular 
	( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
 **************************************************************************/
// Tu código acá






/**************************************************************************
	PUNTO 5
	Eliminar un producto mediante su ID “/api/products/:id”,
 ***************************************************************************/
// Tu código acá







module.exports = { router, products };
