let parametroA;
let parametroB;
let operacion;

function init() {
	let pantalla = document.querySelector(".pantalla");
	let clear = document.querySelector(".clear");
	let sumar = document.querySelector(".sumar");
	let restar = document.querySelector(".restar");
	let multiplicar = document.querySelector(".multiplicar");
	let dividir = document.querySelector(".dividir");
	let uno = document.querySelector(".uno");
	let dos = document.querySelector(".dos");
	let tres = document.querySelector(".tres");
	let cuatro = document.querySelector(".cuatro");
	let cinco = document.querySelector(".cinco");
	let seis = document.querySelector(".seis");
	let siete = document.querySelector(".siete");
	let ocho = document.querySelector(".ocho");
	let nueve = document.querySelector(".nueve");
	let cero = document.querySelector(".cero");
	let igual = document.querySelector(".igual");
	let cuadrada = document.querySelector(".cuadrada");
	let cubica = document.querySelector(".cubica");
	let potencia = document.querySelector(".potencia");

	uno.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "1";
	}
	dos.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "2";
	}
	tres.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "3";
	}
	cuatro.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "4";
	}
	cinco.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "5";
	}
	seis.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "6";
	}
	siete.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "7";
	}
	ocho.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "8";
	}
	nueve.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "9";
	}
	cero.onclick = function(evt){
		pantalla.textContent = pantalla.textContent + "0";
	}



	clear.onclick = function(evt){
		reset();
	}



	sumar.onclick = function(evt){
		parametroA = pantalla.textContent;
		operacion = "+";
		limpiar();
	}

	restar.onclick = function(evt){
		parametroA = pantalla.textContent;
		operacion = "-";
		limpiar();
	}

	multiplicar.onclick = function(evt){
		parametroA = pantalla.textContent;
		operacion = "*";
		limpiar();
	}

	dividir.onclick = function(evt){
		parametroA = pantalla.textContent;
		operacion = "/";
		limpiar();
	}

	cuadrada.onclick = function(evt){
		parametroA = pantalla.textContent;
		operacion = "&&";
		resolver();
	}

	cubica.onclick = function(evt){
		parametroA = pantalla.textContent;
		operacion = "&&&";
		resolver();
	}

	potencia.onclick = function(evt){
		parametroA = pantalla.textContent;
		operacion = "&&&&";
		limpiar();
	}



	igual.onclick = function(evt){
		parametroB = pantalla.textContent;
		resolver();
	}



	function reset() {
	pantalla.textContent = "";
	parametroA = 0;
	parametroB = 0;
	operacion = "";
	}

	function limpiar() {
	pantalla.textContent = "";
	}

	function resolver() {
		switch(operacion){
			case "+" :
				resultado = parseFloat(parametroA) + parseFloat(parametroB);
				break;
		
			case "-" :
				resultado = parseFloat(parametroA) - parseFloat(parametroB);
				break;
		
			case "*" :
				resultado = parseFloat(parametroA) * parseFloat(parametroB);
				break;
		
			case "/" :
				resultado = parseFloat(parametroA) / parseFloat(parametroB);
				break;

			case "&&" :
				resultado = parseFloat(Math.sqrt(parametroA));
				break;
		
			case "&&&" :
				resultado = parseFloat(Math.cbrt(parametroA));
				break;
		
			case "&&&&" :
				resultado = parseFloat(parametroA) ** parseFloat(parametroB);
				break;
		
	}
	reset();
	pantalla.textContent = resultado;
}

}

init();


