// Función para mostrar el formulario cuando se hace clic en el botón
// Inicializar EmailJS con tu User ID

document.getElementById('btnConfirmar').addEventListener('click', function() {
    document.getElementById('formularioWidget').style.display = 'block';
});

// Función para cerrar el formulario
function cerrarFormulario() {
    document.getElementById('formularioWidget').style.display = 'none';
}

function initSend() {

    let first = document.getElementById('firstname');
    let last = document.getElementById('lastname');


    let profile = {
        umukiriya: 'Codenet-Bts Support Team',
        from_name: first.value + ' ' + last.value,
    }

    let fields = [first, last];
    let response = document.getElementsByTagName("subiza");
    let index = 0,
        error = 0;
    fields.forEach(element => {
        let fieldName = document.getElementsByTagName("subiza")[index].id;
        if (!element.checkValidity()) (element.value == "") ? response[index].innerHTML = 'Por favor, complete los campos' : response[index].innerHTML = element.validationMessage;
        if (element.checkValidity()) {
            response[index].innerHTML = "";
        }else{
            error++;
        }
        index++;
    });
    console.log(error);
    if (error === 0) sendMail(profile);
}

function sendMail(params) {
    emailjs.send("service_x6yoodl", "template_hy74w5k", params)
        .then(function (response) {
            // Mostrar la confirmación exitosa y ocultar el formulario
            var elementosConfirmacionExitosa = document.querySelectorAll('.confirmacionExitosa');
            var elementosOcultar = document.querySelectorAll('.ocultar');

            elementosConfirmacionExitosa.forEach(function(elemento) {
                elemento.style.display = 'block';
            });

            elementosOcultar.forEach(function(elemento) {
                elemento.style.display = 'none';
            });

            // Cerrar el widget después de 3 segundos
            setTimeout(function() {
                cerrarFormulario();
            }, 4000);
        }, function (error) {
            // En caso de error al enviar el correo
            alert('error :  ' + error);
        });   
}