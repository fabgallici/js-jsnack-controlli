// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.


var userInputNum;
//versione con ciclo while
var numCount = 0;
var a = 1;
while (a <= 5) {
  userInputNum = parseInt(prompt('Inserisci un numero'));
  numCount += userInputNum;
  a++;
}
console.log('la somma dei numeri inseriti è ' + numCount);
