let products = require("../utils/mock");
const express = require("express");

const router = express.Router();



/*************************************************************** 
	PUNTO 1
	- Retornar todos los productos del array. “/api/products”,
	Utiliza la variable products que se encuentra en este archivo
 ***************************************************************/
// Tu código acá








/****************************************************************
	PUNTO 2
	- Obtener un producto específico mediante su ID “/api/products/:id”
*******************************************************************/
// Tu código acá







/**********************************************************************
	PUNTO 3
	- Agregar un nuevo producto “/api/products”
 ***********************************************************************/
// Tu código acá






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
