
const express = require("express");
const router = express.Router();

/************************************************************* 
	EJERCICIO 
	1-Crear un endpoint que utilice el método GET y 
	devuelva como respuesta el mensaje “Hola mundo!”. 
	2-Probar que el mensaje llega al navegador.
 ************************************************************/
// Tu código acá


router.get('/', (req,res)=>{
	res.send('¡Hola mundo!')
})


/*************************************************************
	EXTRA
	1-Crear un array de productos usando la variable products
	2-Crear otro método Get cuya ruta sea '/products'
	3-Responder con el array al ingresar a '/products'
 *************************************************************/
// Tu código acá
let products=[{
	name: 'Mouse',
	id: 1,
	price: 'Mouse Gamer con 10 teclas!',
  }, 
  {
	name: 'Mouse',
	id: 1,
	price: 'Mouse Gamer con 10 teclas!',
  }, 
  {
	name: 'Mouse',
	id: 1,
	price: 'Mouse Gamer con 10 teclas!',
  }, ];
router.get('/products',(req,res)=>{
	res.send(products)
})


module.exports = { router, products };
