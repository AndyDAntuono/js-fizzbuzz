Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Numero minimo di push: 5 (solo parte obbligatoria)
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

*SOLUZIONE*

- Prima ancora ancora di creare una griglia tramite css, testo un ciclo e che parta da 1 fino 100 tramite javascript;
- SE il ciclo si comporta nel modo desiderato procedo a personalizzare i file html e css;
- nel file css creo delle classi. Alcune fungeranno da contenitori (container, fizzbuzzdom e fizzbuzzdom_content) per i "quadrati numerati". Queste sono da inserire nel file index.html;
- Nel file index.html creo un layout basandomi sulle classi collegato a Boostrap 5.3 (vedere l'appposito link nella sezione head nel file index.html);
- Aggiungo ulteriori classi nel css che serviranno come colori di sfondo per i quadrati (vedere la sezione bg squares nello style.css);
- "Collego" le classi css del colore di sfondo ai rispettivi elementi all'interno del ciclo del file script.js;