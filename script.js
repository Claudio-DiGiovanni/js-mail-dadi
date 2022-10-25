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

const min = Math.ceil(1);
const max = Math.floor(6);
const userNum = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
const computerNum = parseInt(Math.floor(Math.random() * (max - min + 1) + min));

document.getElementById("run").addEventListener("click", function () {
    const userEmail = document.getElementById("email").value

    if (emailList.includes(userEmail)) {
        document.querySelector(".player").innerHTML += '<p class="fs-3">Puoi giocare</p>'
        document.querySelector(".dadi").innerHTML += `<div class="wrap col-3">
        <div class="cube">
            <div class="dado1 result front">${userNum}</div>
            <div class="dado1 result back">${userNum}</div>
            <div class="dado1 result top">${userNum}</div>
            <div class="dado1 result bottom">${userNum}</div>
            <div class="dado1 result left">${userNum}</div>
            <div class="dado1 result right">${userNum}</div>
        </div>
    </div>

    <div class="wrap col-3">
        <div class="cube">
            <div class="dado2 result front">${computerNum}</div>
            <div class="dado2 result back">${computerNum}</div>
            <div class="dado2 result top">${computerNum}</div>
            <div class="dado2 result bottom">${computerNum}</div>
            <div class="dado2 result left">${computerNum}</div>
            <div class="dado2 result right">${computerNum}</div>
        </div>
    </div>`


        document.querySelector(".dado1").innerHTML = userNum;
        document.querySelector(".dado2").innerHTML = computerNum;

        if (userNum > computerNum) {
            document.querySelector("#risultato").innerHTML += '<p class="result">Hai vinto</p>'
        } else if (userNum == computerNum) {
            document.querySelector("#risultato").innerHTML += '<p class="result">Parità</p>'
        } else {
            document.querySelector("#risultato").innerHTML += '<p class="result">Hai perso</p>'
        }
    } else {
        document.querySelector(".player").innerHTML += '<p class="fs-3">La tua email non è nella lista dei giocatori. Prego inserisci una mail valida per giocare </p>'
    } 
})



