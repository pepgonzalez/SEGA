$(window).load(function() {
		// Animate loader off screen
	$("loader").fadeOut("slow");;
});

function sendEmail(){

	var n = document.getElementById("js-nombre");
	var nombre = n.value;
	if (nombre.length == 0){
		n.style.color = "red";
	}
	var correo = document.getElementById("js-correo").value;
	var comentarios = document.getElementById("js-comments").value;
	alert("Correo enviado: " + nombre + " - " + correo + " - " + comentarios );
}