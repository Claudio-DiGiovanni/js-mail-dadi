/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

const emailList = ["digioclaudio97@gmail.com", "altramail@libero.com", "mailinventata@live.it" ]
const userEmail = prompt("inserisci la tua email")

if (emailList.includes(userEmail)) {
    console.log("puoi accedere")
} else {
    console.log ("non puoi accedere")
} 

const min = Math.ceil(1);
const max = Math.floor(6);
const userNum = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
const computerNum = parseInt(Math.floor(Math.random() * (max - min + 1) + min));

console.log(userNum);
console.log(computerNum);

if (userNum > computerNum) {
    console.log("Hai vinto")
} else if (userNum == computerNum) {
    console.log("Parità")
} else {
    console.log("Hai perso")
}