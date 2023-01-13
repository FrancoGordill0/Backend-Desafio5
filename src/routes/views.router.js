import express from "express";


const router = express.Router();


let products = [
	{
		"id": 1,
		"title": "Producto 1",
		"description": "Este es un producto 1",
		"code": "abc123",
		"price": 150,
		"stock": 25,
		"category": "producto",
		"thumbnail": "Sin imagen"
	},
	{
		"id": 2,
		"title": "Producto 2",
		"description": "Este es un producto 2",
		"code": "123edf",
		"price": 200,
		"stock": 11,
		"category": "producto",
		"thumbnail": "Sin imagen 2"
	},
	{
		"id": 3,
		"title": "Producto 3",
		"description": "Este es un producto 3",
		"code": "351sd",
		"price": 200,
		"stock": 32,
		"category": "producto",
		"thumbnail": "Sin imagen"
	},
	{
		"id": 4,
		"title": "Producto 4",
		"description": "Este es un producto 4",
		"price": 200,
		"code": "1456ef",
		"stock": 10,
		"category": "producto",
		"thumbnail": "Sin imagen"
	},
	{
		"id": 5,
		"title": "producto 5 actualizado",
		"description": "producto nuevo 5",
		"code": "15611523as",
		"price": "12000",
		"stock": "120",
		"category": "productos",
		"thumbnail": "nadanada"
	}
	
]  

router.get ("/", (req, res)=> {
    res.render("home", {
        products
    });
})


router.get ("/realtimeproducts", (req, res)=> {
    res.render("realTimeProducts", {
        products
    });
})


/* router.post(`/realtimeproducts`, (req, res) => {
    ; (async () => {
  
      const name = req.body.title;
      const price = Number(req.body.price);
      const category = req.body.category;
  
      const newProducto = {
        title: `${name}`,
        price: price,
        category: `${category}`
      };
      const id = await products.push(newProducto);
      return res.redirect(`/realtimeproducts`);
    })();
  }); */


export default router;
