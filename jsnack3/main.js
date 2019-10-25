// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var userInputNum, userInputNum2;
var numCount = 0;
for (var i = 1; i <=5; i++) {
  userInputNum = parseInt(prompt('Inserisci un numero'));
  numCount += userInputNum;
}
console.log('la somma dei numeri inseriti è ' + numCount);
