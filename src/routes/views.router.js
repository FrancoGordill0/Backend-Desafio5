import express from "express";
import {FileManager, ProductFileManager} from "../classes/FileManager.js";
import path from "path";


const router = express.Router();

const fileManager = new FileManager(
 path.resolve(process.cwd(), "public", "../public/products.json")
);

const productFileManager = new ProductFileManager(
	path.resolve(process.cwd(), "public", "../public/products.json")
  );


router.get('/', async (req,res)=>{
	const products = await fileManager.getAll();
	res.render("home", {
		   products
	   });
   });


router.get('/realtimeproducts', async (req,res)=>{
	const products = await fileManager.getAll();
	res.render("realTimeProducts", {
		   products
	   });
   });

router.post("/realtimeproducts", async (req, res) => {
	const newProduct = req.body;
	await productFileManager.add(newProduct);
	res.redirect("/realtimeproducts");
  });

  router.delete("/realtimeproducts", async (req, res) => {
	const id = req.body.id;
	await productFileManager.delete(id);
	res.redirect("/realtimeproducts"); 
  });

export default router;
