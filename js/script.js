/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari*/

document.getElementById("startPal").addEventListener('click', (palindromia));

function palindromia(){
	const parola = document.getElementById('textPal').value;
	let parolaDivisa = parola.split('');
	let stringaInversa = parolaDivisa.reverse(); 
	let parolaInversa = stringaInversa.join('');
	
	if (parola.toLowerCase() == parolaInversa.toLowerCase()){
		document.getElementById("result").innerHTML = `
		<h3>La parola ${parola.toLowerCase()} è uguale a ${parolaInversa.toLowerCase()}.<br>
		Questa parola è palindroma</h3>
		`;
	}
	else{
		document.getElementById("result").innerHTML = `
		<h3>La parola ${parola.toLowerCase()} è disuguale a ${parolaInversa.toLowerCase()}.<br>
		Questa parola non è palindroma</h3>
		`;
	}
}

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

document.getElementById("startPD").addEventListener("click", (oddEvenGame));

function oddEvenGame(){
	let userNum = parseInt(document.querySelector("input[name='userNum']").value);
	let userGuess = document.querySelector("select[name='userGuess']").value;

	let result = document.getElementById("resultPD");
	let data = document.getElementById("data");

	if(userNum >= 1 && userNum <= 5){
		let cpuNum = genRandom(1, 5);

		result.innerHTML = "<h3>" + ((myIsEven(userNum + cpuNum) == userGuess) ? "User won" : "Cpu won") + "</h3>";
		data.innerHTML = `<h4>Il mio numero è "${userNum}"</h4><h4>Il dio supremo CPU è "${cpuNum}"</h4><h4>La somma è ${userNum+cpuNum}</h4>`
	}
	else
		result.innerHTML = "Errore nell'inserimento del numero";
}

function myIsEven(number){
	return number%2;
}

function genRandom(min, max){
	return Math.round((Math.random()*max) + min);
}