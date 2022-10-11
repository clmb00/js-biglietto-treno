const kmUser = prompt("Quanti kilometri vuole percorrere?");
const etaUser = prompt("Quanti anni ha?");
//const kmUser = 100;
//const etaUser = 70;
const scontoMinorenni = 0.2;
const scontoOver = 0.4;

let prezzoBiglietto = (kmUser * 0.21).toFixed(2);

if (etaUser < 18) {
	prezzoBiglietto -= (prezzoBiglietto * scontoMinorenni).toFixed(2);
} else if (etaUser > 65) {
	prezzoBiglietto -= (prezzoBiglietto * scontoOver).toFixed(2);
};

document.getElementById("prezzo").innerHTML = `
	${prezzoBiglietto} &euro;
`