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
	let id =req.body.id
	let setName= req.body.name
	let setQuantity= req.body.quantity
	let setColors=req.body.colors
	let setPrice=req.body.price
	//console.log(setName,setPrice,setQuantity,setColors)

	products.push({
		id:id,
		name: setName,
		price: setPrice,
		quantity: setQuantity,
		colors: [
		`${setColors}`
		]
		/* name: "Macbook",
		price: 1400,
		quantity: 40,
		colors: ["silver", "black", "white"], */
	})
	
	res.send(products)
})






/************************************************************************
	PUNTO 4
	Cambiar alguna propiedad de un producto en particular 
	( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
 **************************************************************************/
// Tu código acá


router.put("/products/:id",(req,res)=>{
	
	let setName= req.body.name
	let setQuantity= req.body.quantity
	let setColors=req.body.colors
	let setPrice=req.body.price
	for (let i=0; i<products.length; i++)
	{

		let idCheck=req.params.id
		if (idCheck== products[i].id)
		{
			
		}
		if (idCheck>products.length)
		{
			res.status(404).send('error 404 page not found')
		}
	}

})



/**************************************************************************
	PUNTO 5
	Eliminar un producto mediante su ID “/api/products/:id”,
 ***************************************************************************/
// Tu código acá







module.exports = { router, products };
