// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var listaNomi = ['Caio', 'Marco', 'Paolo', 'Gino', 'Luca'];

var nomeUtente = prompt('Inserisci il tuo nome');

if (listaNomi.includes(nomeUtente)) {
  console.log('Puoi partecipare');
} else {
  console.log('Non sei invitato');
}
