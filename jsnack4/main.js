// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var listaNomi = ['Caio', 'Marco', 'Paolo', 'Gino', 'Luca'];

var nomeUtente = prompt('Inserisci il tuo nome');

var i = 0;
var found = false;
while (i < listaNomi.length && !found) {
  if (nomeUtente === listaNomi[i]) {
    console.log('Puoi partecipare');
    found = true;
  }
  i++
};
if (!found) {
  console.log('Non sei invitato');
}
