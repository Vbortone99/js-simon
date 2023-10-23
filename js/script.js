// Generare TEMPLATE da inserire
/**
 * TEMPLATE
 <div class="col">
     <div class="card d-flex justify-content-center align-items-center display-3">
         <input type="text" class="form-control">
 
     </div>
 </div>
*/

"use strict"

simonSays();
function simonSays(){
    const min = 1;
    const max = 100;

    // elementi da indovinare
    const numbersToGuess = [];

    // Set Timer 
    const timer = 3000;
    const row = document.querySelector('.row');
    row.innerHTML= "";
    const results = document.getElementById('results');
    results.innerHTML = '';

    // Visualizzare i numeri nella pagina e poi far si che siano da indovinare
    while(numbersToGuess.length < 5){
        const num = getRndInteger(min,max);
        if(!numbersToGuess.includes(num)){   /*Se nei numeri da indovinare non è presente il numero generato, il numero generato va nell'array dei numeri da generare.*/
            numbersToGuess.push(num);
            /*crea funzione per inserire num nella col*/
            let col = drawCol(num);
            // Aggiungi la col alla row
            row.append(col);
        }
    };

    // FUNZIONE DRAWCOL
    /**
     * 
     * @param{Number} num
     * returns{Object}
     */
    function drawCol(num){
        const col = document.createElement('div');
        col.classList.add('col');
        // Inserisci il template 
        col.innerHTML = `
        <div class="card d-flex justify-content-center align-items-center display-3">
        ${num}
        </div>
        `;
        return col;
    };
    
    // TIMEOUT PER UTENTE
    setTimeout(tryToGuess,timer)

    //Creare una funzione per i numeri da indovinare dall'utente
    function tryToGuess(){
        // numeri utente vuoto
        const userNumbers = [];
        // Crea e Inserisci le card per i numeri
        const cards = document.getElementsByClassName('card');
        for(let i = 0; i < cards.length; i++){
            cards[i].innerHTML = `<input type="text" class="form-control">`;
        }
        // Crea un bottone
        const btn = document.createElement('button');
        btn.className = 'btn btn-success';
        btn.innerText = 'Enter the numbers displayed';
        btn.addEventListener('click', function(){
            let userNumbersInput = document.getElementsByClassName('form-control');
            for(let i = 0; i < userNumbersInput.length; i++){
                if(!isNaN(parseInt(userNumbersInput[i].value))){
                    userNumbers.push(parseInt(userNumbersInput[i].value));
                }
            }
            const guessedNumbers = compare(numbersToGuess,userNumbers);
            printResult(guessedNumbers,numbersToGuess,results);
        })
        results.append(btn);
    };

    function compare(numbersToGuess,userNumbers){
        console.log(numbersToGuess);
        console.log(userNumbers);
        const guessedNumbers = [];
        for(let i = 0; i < userNumbers.length; i++){
            if(numbersToGuess.includes(userNumbers[i])){
                guessedNumbers.push(userNumbers[i])
            }
        }
        return guessedNumbers;
    };

    function printResult(guessedNumbers,numbersToGuess,container){
        container.innerHTML = '';
        container.innerHTML = `<h3>You guess ${guessedNumbers.length} of ${numbersToGuess.length} numbers: ${guessedNumbers}</h3>`;
        const btn = document.createElement('button');
        btn.addEventListener('click', simonSays);
        container.append(btn);
    };
    function getRndInteger(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
};