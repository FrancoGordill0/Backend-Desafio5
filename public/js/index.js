const socket = io();

const btn = document.getElementById("btn");
const btnDelete = document.getElementById("btn-eliminar");

const inputTitle = document.getElementById("Title");
const inputPrice = document.getElementById("Price");

const inputDelete = document.getElementById("")


btn.addEventListener('click', (evt) => {
            
	const title = inputTitle.value;
	const price = inputPrice.value;
	

	if (title !== '' && price !== '') {
		socket.emit("productoAgregado",{
			"title": title,
			"price": price
		})
	}
})

btnDelete.addEventListener('click', ()=> {
	
	const id = inputDelete.value;
	
	if (id !== '' ) {
		socket.emit("productoEliminado",{
			"id": id
		})
	}
})


