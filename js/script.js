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
    
}