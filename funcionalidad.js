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

	uno.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "1";
	});

	dos.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "2";
	});

	tres.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "3";
	});

	cuatro.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "4";
	});

	cinco.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "5";
	});

	seis.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "6";
	});
	
	siete.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "7";
	});

	ocho.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "8";
	});

	nueve.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "9";
	});

	cero.addEventListener("click", ()=>{
		pantalla.textContent = pantalla.textContent + "0";
	});



	clear.addEventListener("click", ()=>{
		reset();
	});


	sumar.addEventListener("click", ()=>{
		parametroA = pantalla.textContent;
		operacion = "+";
		limpiar();
	});

	restar.addEventListener("click", ()=>{
		parametroA = pantalla.textContent;
		operacion = "-";
		limpiar();
	});

	multiplicar.addEventListener("click", ()=>{
		parametroA = pantalla.textContent;
		operacion = "*";
		limpiar();
	});

	dividir.addEventListener("click", ()=>{
		parametroA = pantalla.textContent;
		operacion = "/";
		limpiar();
	});

	cuadrada.addEventListener("click", ()=>{
		parametroA = pantalla.textContent;
		operacion = "&&";
		resolver();
	});

	cubica.addEventListener("click", ()=>{
		parametroA = pantalla.textContent;
		operacion = "&&&";
		resolver();
	});

	potencia.addEventListener("click", ()=>{
		parametroA = pantalla.textContent;
		operacion = "&&&&";
		limpiar();
	});


	igual.addEventListener("click", ()=>{
		parametroB = pantalla.textContent;
		resolver();
	});




	function reset() {
	pantalla.textContent = "";
	parametroA = 0;
	parametroB = 0;
	operacion = "";
	};

	function limpiar() {
	pantalla.textContent = "";
	};

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
		
	};
	reset();
	pantalla.textContent = resultado;
};

};

init();


