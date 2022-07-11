window.onload = function (){
    let items = JSON.parse(localStorage.getItem("itemsCarrito"));
    let total = 0;

    if(items != "" && items.length != 0 && items != null){        
        items.forEach(item =>{
            document.getElementById("itemsCarrito").innerHTML = document.getElementById("itemsCarrito").innerHTML + "<div style='display:inline-flex; color:white; align-items: baseline;'><p>"+ item.producto.nombre +" x<p style='padding-right:10px'>"+ item.cantidad +"</p></p></div>"; 
            total = total + item.producto.precio;
        });
        
        document.getElementById("divTotal").style.display = "initial";
        document.getElementById("total").innerHTML = parseInt(document.getElementById("total").innerHTML) + total;
    }
    else
        document.getElementById("msjCarritoVacio").style.display = "initial";
};

const btn = document.querySelector('#finalizar')
btn.addEventListener('click', () => {

    Swal.fire ({
        title: 'Listo!',
        text: 'Tu pedido esta en camino!',
        icon: 'success',
        confirmButtonText: 'Confirmar',
        confirmButtonColor: '#000000'

    })

})