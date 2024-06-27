//recupero la scacchiera
const fizzbuzzdom_content = document.querySelector(`.fizzbuzzdom_content`)

//calcolo un for che rappresenti un ciclo che parta dal numero fino al numero 100
for (let i=1; i <= 100; i++){
    console.log(i);

    //creo il quadrato e aggiungo la classe square
    const square = document.createElement(`div`);
    square.classList.add(`square`);
    //aggiungo la classe common-bg per tutt i quadrati che contengono numeri che non sono ne multipli di 3 e/o 5
    square.classList.add(`common-bg`);
    //aggiungo innerText che è basto sulla numerazione di for / del ciclo
    square.innerText = `${i}\n`;


    //faccio in moddo che il numero che sia multiplo di 3 che di 5 venga costrasegnato dalla parola Fizzbuzz
    if( i % 3 == 0 && i % 5 == 0 ) {
        //aggiungo la classe fizz_buzz-bg per tutt i quadrati che contengono numeri che non sono multipli di 3 e 5
        square.classList.add(`fizz_buzz-bg`);
        square.innerText = `FizzBuzz`;
        console.log(`${i}FizzBuzz`);
    } 
    //faccio in moddo che il numero che sia multiplo di 3 venga costrasegnato dalla parola Fizz
    else if ( i % 3 == 0 ) {
        //aggiungo la classe fizz-bg per tutt i quadrati che contengono numeri che non sono multipli di 3
        square.classList.add(`fizz-bg`)
        square.innerText = `Fizz`;
        console.log(`${i}Fizz`);
    }
    //faccio in moddo che numero che sia multiplo di 5 venga costrasegnato dalla parola Buzz   
    else if( i % 5 == 0 ) {
        //aggiungo la classe buzz-bg per tutt i quadrati che contengono numeri che non sono multipli di 5
        square.classList.add(`buzz-bg`);
        square.innerText = `Buzz`;
        console.log(`${i}Buzz`);
    }

    fizzbuzzdom_content.append(square);
}