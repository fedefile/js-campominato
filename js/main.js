    //
    // Il computer deve generare 16 numeri casuali tra 1 e 100.
    // In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    // BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
    // Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50
    // 

var dimensioneCampo = sceltaDifficolta();
var totaleMine = 16;
var bandierineMax = dimensioneCampo - totaleMine;

var posizioneMine = minaIlCampo(dimensioneCampo, totaleMine);
console.log(posizioneMine);
var bandierinePiazzate = [];

var boom = false;
while ((bandierinePiazzate.length < bandierineMax) && (boom === false)) {
    var bandierinaDaPiazzare = parseInt(prompt('Scrivi un numeri da 1 a ' + dimensioneCampo));
    if (!bandierinePiazzate.includes(bandierinaDaPiazzare)) {
        if (!posizioneMine.includes(bandierinaDaPiazzare)) {
            bandierinePiazzate.push(bandierinaDaPiazzare);
            if (bandierinePiazzate.length == bandierineMax) {
                alert('Vai a giocare al Superenalotto');
            } else {
                alert('Hai piazzato una bandierina');
            }
        } else {
            alert('BOOOM!! hai beccato una bomba! Hai piazzato ' + bandierinePiazzate.length + ' bandierine');
            boom = true;
        }
    } else {
        alert('Hai già inserito questo numero');
    }
}

function sceltaDifficolta() {
    var scelta = parseInt(prompt('Inserisci la difficoltà tra 1, 2 o 3'));
    switch (scelta) {
        case 1:
            var dimCampo = 100;
            break;
        case 2:
            var dimCampo = 80;
            break;
        case 3:
            var dimCampo = 50;
            break;
        default:
            var dimCampo = 100;
    }
    return dimCampo;
}

function minaIlCampo(dimCampo, totMine) {
    var posizMine = [];
    while (posizMine.length < totMine) {
        var minaDaPiazzare = generaRandomMinMax(1, dimCampo);
        if (!posizMine.includes(minaDaPiazzare)) {
            posizMine.push(minaDaPiazzare);
        }
    }
    return posizMine;
}

function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
