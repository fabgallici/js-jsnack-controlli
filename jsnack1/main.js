var firstNum = parseInt(prompt('Inserisci il primo numero'));
var SecondNum = parseInt(prompt('Inserisci il secondo numero'));

if (firstNum > SecondNum) {
  console.log('firstNum', firstNum);
  document.getElementById('result').innerHTML = firstNum;
} else if (SecondNum > firstNum) {
  console.log('SecondNum', SecondNum);
  document.getElementById('result').innerHTML = SecondNum;
} else {
  console.log('Sono uguali', firstNum);
  document.getElementById('result').innerHTML = 'Sono uguali';
}
