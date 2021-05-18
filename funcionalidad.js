let parametroA;
let parametroB;
let operacion;

function iniciar() {
	let pantalla = document.querySelector(".pantalla");
	const clear = document.querySelector(".clear");
	const sumar = document.querySelector(".sumar");
	const restar = document.querySelector(".restar");
	const multiplicar = document.querySelector(".multiplicar");
	const dividir = document.querySelector(".dividir");
	const uno = document.querySelector(".uno");
	const dos = document.querySelector(".dos");
	const tres = document.querySelector(".tres");
	const cuatro = document.querySelector(".cuatro");
	const cinco = document.querySelector(".cinco");
	const seis = document.querySelector(".seis");
	const siete = document.querySelector(".siete");
	const ocho = document.querySelector(".ocho");
	const nueve = document.querySelector(".nueve");
	const cero = document.querySelector(".cero");
	const igual = document.querySelector(".igual");
	const cuadrada = document.querySelector(".cuadrada");
	const cubica = document.querySelector(".cubica");
	const potencia = document.querySelector(".potencia");

	uno.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "1";
	});

	dos.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "2";
	});

	tres.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "3";
	});

	cuatro.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "4";
	});

	cinco.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "5";
	});

	seis.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "6";
	});
	
	siete.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "7";
	});

	ocho.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "8";
	});

	nueve.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "9";
	});

	cero.addEventListener("click", (evt)=>{
		pantalla.textContent = pantalla.textContent + "0";
	});



	clear.addEventListener("click", (evt)=>{
		reset();
	});


	sumar.addEventListener("click", (evt)=>{
		parametroA = pantalla.textContent;
		operacion = "+";
		limpiar();
	});

	restar.addEventListener("click", (evt)=>{
		parametroA = pantalla.textContent;
		operacion = "-";
		limpiar();
	});

	multiplicar.addEventListener("click", (evt)=>{
		parametroA = pantalla.textContent;
		operacion = "*";
		limpiar();
	});

	dividir.addEventListener("click", (evt)=>{
		parametroA = pantalla.textContent;
		operacion = "/";
		limpiar();
	});

	cuadrada.addEventListener("click", (evt)=>{
		parametroA = pantalla.textContent;
		operacion = "&&";
		resolver();
	});

	cubica.addEventListener("click", (evt)=>{
		parametroA = pantalla.textContent;
		operacion = "&&&";
		resolver();
	});

	potencia.addEventListener("click", (evt)=>{
		parametroA = pantalla.textContent;
		operacion = "&&&&";
		limpiar();
	});


	igual.addEventListener("click", (evt)=>{
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

iniciar();


