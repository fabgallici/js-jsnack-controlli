// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

var firstNum = parseInt(prompt('Inserisci il primo numero'));
var secondNum = parseInt(prompt('Inserisci il secondo numero'));

if (!isNaN(firstNum) && !isNaN(secondNum) && firstNum >= 0 && secondNum >=0) {
  if (firstNum > secondNum) {
    console.log('firstNum', firstNum);
    document.getElementById('result').innerHTML = firstNum;
  } else if (secondNum > firstNum) {
    console.log('secondNum', secondNum);
    document.getElementById('result').innerHTML = secondNum;
  } else {
    console.log('Sono uguali', firstNum);
    document.getElementById('result').innerHTML = 'Sono uguali';
  }
} else {
  console.log('valori inseriti errati');
}
