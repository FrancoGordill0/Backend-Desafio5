import express from "express";
import { engine } from "express-handlebars"
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js"
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";


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
});



