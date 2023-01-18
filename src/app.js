import express from "express";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import { ProductFileManager } from "./classes/FileManager.js";
import viewsRouter from "./routes/views.router.js";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import path from "path";


      //Initializations
const app = express();

const httpServer = app.listen(3000,()=> console.log("Server running on port 3000"));

const socketServer = new Server(httpServer);



      //Settings
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");


app.use(express.static("public"));
app.use(express.json());
app.use("/", viewsRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);


      //Websockets
socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!");

  // Agregar producto
socketServer.on("productoAgregado", (data) => {
	const productFileManager = new ProductFileManager(
	 path.resolve(process.cwd(), "public", "../public/products.json")
	);
	productFileManager.writeAll(data);
  });

  socketServer.on("productoEliminado", (data) => {
	const productFileManager = new ProductFileManager(
	 path.resolve(process.cwd(), "public", "../public/products.json")
	);
	productFileManager.writeAll(data);
  });
});



