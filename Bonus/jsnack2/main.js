// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var word1 = prompt('Inserisci la prima parola');
var word2 = prompt('Inserisci la seconda parola');

//controllo che sia stato inserito un valore e la var non sia undefined
if (word1 && word2) {
  if (word1.length < word2.length) {
    console.log(word1 + ' ' + word2);
  } else if (word2.length < word1.length) {
    console.log(word2 + ' ' + word1);
  } else {
    console.log('le parole hanno uguale lunghezza');
  }
} else {
  console.log('non è stato inserito alcun valore, ripetere')
}
