// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var nums = [];
var userNum;
for (var i = 1; i <= 6; i++) {
  userNum = parseInt(prompt('Inserisci un numero'));
  if (userNum % 2 !== 0) {
    nums.push(userNum);
  }
}
console.log(nums);
