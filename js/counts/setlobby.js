<script>
    // URL de la página web remota
    var url = 'https://www.spigotmc.org/resources/authors/zafiro93.69599/';

    // Realiza una solicitud HTTP para obtener el contenido de la página web remota
    fetch(url)
        .then(response => response.text()) // Convierte la respuesta a texto
        .then(html => {
            // Crea un elemento div temporal para contener el HTML de la página remota
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Selecciona el div por su selector CSS
            var divRemoto = tempDiv.querySelector('#tu_id_de_div');

            // Si se encontró el div, obtén su contenido
            if (divRemoto) {
                var valorDiv = divRemoto.innerText; // o divRemoto.innerHTML si necesitas el HTML dentro del div

                // Haz lo que quieras con el valor obtenido
                console.log("El valor dentro del div remoto es: " + valorDiv);

                // Muestra el contenido en tu página HTML
                document.getElementById('contenido').innerText = valorDiv;
            } else {
                console.log('No se encontró el div en la página remota.');
            }
        })
        .catch(error => console.error('Error al obtener la página remota:', error));
</script>