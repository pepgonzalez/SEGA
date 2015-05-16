function sendEmail(){

	var nombre = document.getElementById("js-nombre");
	var correo  = document.getElementById("js-correo");
	var comments = document.getElementById("js-comments");
	var t_nombre = nombre.value;
	var t_correo = correo.value;
	var t_comments = comments.value;

	if (t_nombre.length == 0){
		nombre.style.border = "solid red 1px";
	}
	if (t_correo.length == 0){
		correo.style.border = "solid red 1px";
	}
	if (t_comments.length == 0){
		comments.style.border = "solid red 1px";
	}
	if (t_nombre.length == 0 || t_correo.length == 0 || t_comments.length == 0){
		alert("Por favor complete todos los campos!");
	}else{
		alert("Gracias por sus comentarios, en breve nos pondremos en contacto con usted.");
	}
}