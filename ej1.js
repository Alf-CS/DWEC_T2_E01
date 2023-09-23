'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

console.log('--------------- APARTADO 1 -----------------');
function compareLengthStrings(cadena1, cadena2){
	if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
		console.error("Los parámetros tienen que ser del tipo cadena de texto.");
		return;
	}
	if (cadena1.length> cadena2.length)
		console.log(cadena1 + " es la cadena más larga");
	else if (cadena2.length > cadena1.length)
		console.log(cadena2 + " es la cadena más larga");
	else console.log ("las cadenas tienen igual longitud");
}
let cadena1="Hola";
let cadena2="Mundo";
compareLengthStrings(cadena1, cadena2);

cadena1="I love";
cadena2="Javascript";
compareLengthStrings(cadena1, cadena2);

cadena1="Esto es una cadena";
cadena2=0; // Pero esto no es una cadena de texto.
compareLengthStrings(cadena1, cadena2);

/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el segundo
 * por pantalla, pero en cada iteración muestra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 2 -----------------');

function multiplicaPor2 (numeroIteraciones,valorInicial){
	if (typeof numeroIteraciones !== "number" || typeof valorInicial !== "number") {
    console.error("Los parámetros tienen que ser números enteros");
    return;
	}
	console.log ("Vamos a multiplicar "+ (numeroIteraciones-1) + " veces por 2 el número: "+ valorInicial);
	console.log(valorInicial);
	for (let i=1; i<numeroIteraciones; i++){
		valorInicial = valorInicial*2;
		console.log(valorInicial);
	}
}

console.log ("Llamamos a la función multiplicaPor2(5,7)");
multiplicaPor2(5,7);
console.log ("Llamamos a la función multiplicaPor2(4,7)");
multiplicaPor2(4,7);
console.log ("Llamamos a la función multiplicaPor2(6,3)");
multiplicaPor2(6,3);
console.log ("Llamamos a la función multiplicaPor2(1,8)");
multiplicaPor2(1,8);



/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemplo: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 3 -----------------');
function cuentaVecesCaracter(cadena, caracter){
	/*if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
		console.error("Los parámetros tienen que ser del tipo cadena de texto.");
		return;
	}*/
	cadena =String(cadena);
	caracter= String(caracter);
	console.log("cadena: "+cadena);
	console.log("caracter: "+ caracter);
	
	if (caracter.length !== 1) {
		console.log ("El segundo parámetro tiene que ser un caracter");
		return;
	}
	
	let veces=0;	  // Inicializamos el contador para las veces que ocurre.
	// Ahora vamos a recorrer la cadena y vamos a ir contando las veces que aparece.
	for (let i = 0; i < cadena.length; i++) {  //< ya que empezamos por índice 0 y llegamos a cadena.length-1
		if (cadena[i] === caracter) {
			veces++;
		}
	}
	console.log ("El caracter \"" + caracter + "\" está "+ veces + " veces en la cadena "+ cadena);
}


cuentaVecesCaracter("carcasa","a");
console.log("--");
cuentaVecesCaracter("I love Javascript", "lov");
console.log("--");
cuentaVecesCaracter("I love Javascript", "a");
console.log("--");
cuentaVecesCaracter("I love Javascript", 3);





/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son
 *   números válidos (NaN) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos los parámetros, y pasándo algún valor no numérico en el precio o impuesto.
 */
 
console.log('--------------- APARTADO 4 -----------------');

function calculaPrecioIVA(nombreProducto = "Producto genérico", precio = 100, impuesto = 21) {
  
	nombreProducto = String(nombreProducto); 	// Convertimos el nombre de producto a string, por si acaso.
	precio = Number(precio); 					// Convertimos precio e impuesto a número.
	impuesto = Number(impuesto);

	// Verificamos si precio e impuesto son números válidos. Si no (NaN), mostramos ERROR.
	if (isNaN(precio) || isNaN(impuesto)) {
		console.error("Error: El precio y el impuesto deben ser números válidos.");
		return;
	}
	if (impuesto<0){
		console.error("Error: El impuesto aplicado no puede ser negativo.")
		return;
	}
	if (impuesto==0){
		console.warn("Aviso: Se está aplicando un impuesto del 0%");
	}
	
	

	// Calcula el precio final incluyendo impuestos
	let precioFinal = precio *(1 + (impuesto / 100));

	console.log("Producto: " + nombreProducto);	
	console.log("PVP (con impuestos): "+ precioFinal);
}

calculaPrecioIVA("Batidora", 53); // Producto y precio, impuesto por defecto (IVA=21%)
calculaPrecioIVA("Afeitadora", "76"); // Pasamos el precio como cadena - Comprobamos que pasa a número.
calculaPrecioIVA("Curso de Javascript(libro)", 45, 10); // IVA del 10%  
// console.warn("ARREGLAR PARA QUE SOLO SALGAN DOS DECIMALES");
// FALTA AJUSTAR A DOS DECIMALES
calculaPrecioIVA("Curso de HTML(libro)", 45, "%10"); // IVA no válido
calculaPrecioIVA("Curso de HTML(libro)", 45, -3.5); // IVA no válido
calculaPrecioIVA("Curso de CSS(libro)", 45, 0); // Si ponemos mal el IVA, como un 0%.
calculaPrecioIVA(); // Se muestra lo que hace la función con un PRODUCTO GENERICO


/**
 * Apartado 5
 * Crea una función de tipo flecha (arrow function) que reciba 2 parámetros. Una cadena completa y un trozo de cadena a buscar.
 * La función debe comprobar si el trozo de cadena de búsqueda se encuentra dentro de la cadena completa e imprimir
 * por consola un mensaje indicando si ha encontrado coincidencia o no.
 * La búsqueda no debe ser sensible a mayúsculas o minúsculas, por lo que debes comparar ambas cadenas previa transformación
 * a minúsculas (o a mayúsculas). Ej: La cadena "Santiago de Compostela" contiene la cadena de búsqueda "COMPO".
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 5 -----------------');

const contieneCadena = (texto, cadenaBuscada) => {
  // Convierte ambas cadenas a minúsculas para hacer la búsqueda no sensible a mayúsculas
  const textoMinusculas = texto.toLowerCase();
  const cadenaBuscadaMinusculas = cadenaBuscada.toLowerCase();

  // Comprueba si la cadena de búsqueda se encuentra dentro de la cadena completa
  if (textoMinusculas.includes(cadenaBuscadaMinusculas)) {
    console.log("La cadena: "+ cadenaBuscada + " está en: "+ texto);
  } else {
    console.log("La cadena: "+ cadenaBuscada + " NO se ha encontrado en: "+ texto);
  }
};

// Ejemplo de uso:
contieneCadena("Santiago de Compostela", "COMPO"); 	// la consola muestra: La cadena "COMPO" está en "Santiago de Compostela".
contieneCadena("I Love Javascript", "HTML"); 		// la consola muestra: La cadena "HTML" NO se ha encontrado en "I Love Javascript".
