/*document.getElementById("info").onmouseover = function() {
  alert.("Para solicitar Referencias: contacto@unc.com.ar                                                         +543514501000");
};

document.getElementById("info1").onmouseover = function() {
  alert("Para solicitar Referencias: contacto@unlp.com.ar                                                         +543514509999");
};*/


/*
// Seleccionar el elemento p
const pElement = document.querySelector('info');

// Agregar un evento de mouseover al elemento p
pElement.addEventListener('mouseover', function(event) {
  // Crear un nuevo elemento div para mostrar la información
  let infoDiv = document.createElement('div');
  infoDiv.style.position = 'absolute';
  infoDiv.style.backgroundColor = 'lightgray';
  infoDiv.style.padding = '10px';
  infoDiv.innerHTML = 'Información sobre este elemento p';

  // Agregar el nuevo elemento div al documento
  document.body.appendChild(infoDiv);

  // Posicionar el mensaje flotante cerca del cursor
  infoDiv.style.left = event.clientX + 20 + 'px';
  infoDiv.style.top = event.clientY + 20 + 'px';
});

// Agregar un evento de mouseout al elemento p
pElement.addEventListener('mouseout', function() {
  // Eliminar el elemento div cuando el cursor se mueve fuera del elemento p
  document.body.removeChild(document.querySelector('div'));
});*/


	/*function GeneraForm(){
  		////Crear el objeto formulario
		let formulario=document.createElement("form");
 
		////Crear el objeto label de titulo
		let titulo=document.createElement("label");
 
		////Crear el objeto caja de texto Nombres
		let cajaTextNombres=document.createElement("input");
 
		////Crear el objeto caja de texto Apellidos
		let cajaTextApellidos=document.createElement("input");
 
		////Crear el objeto caja de texto Email
		let cajaTextEmail=document.createElement("input");
 
		////Crear el objeto caja de texto Asunto del Mensaje
		let cajaTextAsunto=document.createElement("input");
 
		////Crear el objeto area de texto del Mensaje
		let cajaTextMensaje=document.createElement("textarea");
 
		////Crear el objeto boton
		let boton=document.createElement("input");
 
		////Asignar atributos al objeto formulario
        	formulario.setAttribute('method', "post");//Asignar el atributo method
        	formulario.setAttribute('action', "pablore78@gmail.com");//Asignar el atributo action
        	formulario.setAttribute('style', "width:300px;margin: 0px auto");//Asignar el atributo style
 
        	////Asignar atributos al objeto caja de texto de Nombres
        	cajaTextNombres.setAttribute('type', "text");//Asignar el atributo type
        	cajaTextNombres.setAttribute('placeholder', "Nombres");//Asignar el atributo placeholder
        	cajaTextNombres.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
 
        	////Asignar atributos al objeto caja de texto de Apellidos
        	cajaTextApellidos.setAttribute('type', "text");//Asignar el atributo type
        	cajaTextApellidos.setAttribute('placeholder', "Apellidos");//Asignar el atributo placeholder
        	cajaTextApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
 
        	////Asignar atributos al objeto caja de texto de Email
        	cajaTextEmail.setAttribute('type', "text");//Asignar el atributo type
        	cajaTextEmail.setAttribute('placeholder', "Email");//Asignar el atributo placeholder
        	cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
 
        	////Asignar atributos al objeto caja de texto de Asunto
        	cajaTextAsunto.setAttribute('type', "text");//Asignar el atributo type
        	cajaTextAsunto.setAttribute('placeholder', "Asunto");//Asignar el atributo placeholder
        	cajaTextAsunto.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
 
        	////Asignar atributos al objeto area de texto de Mensaje
        	cajaTextMensaje.setAttribute('placeholder', "Mensaje");//Asignar el atributo placeholder
        	cajaTextMensaje.setAttribute('style', "width:100%;height:200px;margin: 10px 0px;padding: 5px");//Asignar el atributo style
 
		////Asignar atributos al objeto boton
		boton.setAttribute('type', "button");//Asignar el atributo type	
        	boton.setAttribute('value', "Enviar");//Asignar el atributo value
        	boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");//Asignar el atributo style
        	boton.setAttribute('onclick', "alert('Se envio el mensaje')");//Asignar el metodo onclick
 
        	titulo.innerHTML='<h1>Contacto</h1>';//Asignar el texto de titulo en el objeto titulo
        	formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
        	formulario.appendChild(cajaTextNombres);//Agregar el objeto caja de texto Nombres al objeto formulario
        	formulario.appendChild(cajaTextApellidos);//Agregar el objeto caja de texto Apellidos al objeto formulario
        	formulario.appendChild(cajaTextEmail);//Agregar el objeto caja de texto Email al objeto formulario
        	formulario.appendChild(cajaTextAsunto);//Agregar el objeto caja de texto Asunto al objeto formulario
        	formulario.appendChild(cajaTextMensaje);//Agregar el objeto area de texto del Mensaje al objeto formulario
        	formulario.appendChild(boton);//Agregar el objeto boton al objeto formulario
        	document.getElementById('ContentFormulario').appendChild(formulario);//Agregar el formulario a la etiquete con el ID			
	}
 
 
  function GeneraForm2() {
    var formulario = window.open("", "Formulario de Contacto", "height=500, width=500");
    formulario.document.write("<html><head><title>Formulario de Contacto</title></head><body>");
    formulario.document.write("<form>");
    formulario.document.write("<label for='nombre'>Nombre:</label>");
    formulario.document.write("<input type='text' id='nombre' name='nombre'><br><br>");
    formulario.document.write("<label for='email'>Email:</label>");
    formulario.document.write("<input type='email' id='email' name='email'><br><br>");
    formulario.document.write("<label for='mensaje'>Mensaje:</label>");
    formulario.document.write("<textarea id='mensaje' name='mensaje'></textarea><br><br>");
    formulario.document.write("<input type='submit' value='Enviar'>");
    formulario.document.write("</form>");
    formulario.document.write("</body></html>");
  }

  function GeneraForm3() {
    var ventana = window.open("", "Formulario de Contacto", "width=400,height=600");
    ventana.document.write("<html><head><title>Formulario de Contacto</title></head><body>");
    ventana.document.write("<form><label>Nombre:</label><input type='text' name='nombre'><br>");
    ventana.document.write("<label>Correo Electrónico:</label><input type='email' name='email'><br>");
    ventana.document.write("<label>Mensaje:</label><textarea name='mensaje'></textarea><br>");
    ventana.document.write("<input type='submit' value='Enviar'></form>");
    ventana.document.write("</body></html>");
  }*/

  
  const openFormBtn = document.getElementById('open-form-btn');
  const closeFormBtn = document.getElementById('close-form-btn');
  const formContainer = document.querySelector('.popup-form-container');
  openFormBtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
  });

  closeFormBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
  });


