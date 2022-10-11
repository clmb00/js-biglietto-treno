const kmUser = prompt("Quanti kilometri vuole percorrere?");
const etaUser = prompt("Quanti anni ha?");
const scontoMinorenni = 0.2;
const scontoOver = 0.4;

document.getElementById("kilometri").innerHTML = kmUser
document.getElementById("eta").innerHTML = etaUser

let prezzoBiglietto = (kmUser * 0.21);

if (etaUser < 18) {
	prezzoBiglietto -= prezzoBiglietto * scontoMinorenni;
} else if (etaUser > 65) {
	prezzoBiglietto -= prezzoBiglietto * scontoOver;
};

document.getElementById("prezzo").innerHTML = `
	${prezzoBiglietto.toFixed(2)} &euro;
`