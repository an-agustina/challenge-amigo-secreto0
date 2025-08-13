let listaDeNombres = []

function agregarAmigo () {
    //usuario ingresa los nombres
     const nombresDelUsuario = document.getElementById("amigo").value;
     console.log (nombresDelUsuario)

     //si el usuario no ingresa un nombre sale alert
     if (nombresDelUsuario == "") {
          alert ("Por favor escribi un nombre valido.")
          return;  //para que no se agregue el nombre vacio.
     }

     // Validar que no sea un número
    if (Number(nombresDelUsuario)) {
        alert("Los números solos no se pueden ingresar como nombre.");
        return;
    }
      
     //para que los nombres que ingresamos se guarden en la lista
     listaDeNombres.push(nombresDelUsuario)
     console.log (listaDeNombres)

     //para mostrar en la pantalla los nombres añadidos a la lista
     const ulListaAmigos = document.getElementById("listaAmigos")
     ulListaAmigos.innerHTML += `<li>${nombresDelUsuario}</li>`

     //llamamos  la funcion limpiar caja
     limpiarCaja()
}



function sortearAmigo () {
     //sorteo de quien es el amigo secreto por numero
     const AmigoSecreto = Math.floor(Math.random () * listaDeNombres.length)

     //quien es el amigo secreto en nombre
     const QuienEsElAmigoSecreto = listaDeNombres[AmigoSecreto]

     // para mostrar el resultado en pantalla
     const ulResultado = document.getElementById("resultado")
     ulResultado.innerHTML = `El amigo secreto es ${QuienEsElAmigoSecreto}` ;

     // para que al sortear la lista. se borre
     const ulListaAmigos = document.getElementById("listaAmigos");
     ulListaAmigos.innerHTML = "";

     console.log(AmigoSecreto)
     console.log(QuienEsElAmigoSecreto)
}


function limpiarCaja () {
     document.getElementById("amigo").value = "" ;
}