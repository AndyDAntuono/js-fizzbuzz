//RECUOERO LA SCHACCHIERA
const fizzbuzzdom = document.querySelector(`.fizzbuzzdom`)

//calcolo un for che rappresenti un ciclo che parta dal numero fino al numero 100
for (let i=1; i <= 100; i++){
    console.log(i);

    //CREAO IL QUADRATP E AGGIUNGO LA CLASSE square
    const square = document.createElement(`div`)
    square.classList.add(`square`)
    square.classList.add(`common-bg`)
    square.innerText = `${i}\n`


    //faccio in moddo che numero che sia multiplo di 3 che di 5 venga costrasegnato dalla parola Fizzbuz
    if( i % 3 == 0 && i % 5 == 0 ) {
        console.log(`${i}FizzBuzz`);
    } 
    //faccio in moddo che numero che sia multiplo di 3 venga costrasegnato dalla parola Fizz
    else if ( i % 3 == 0 ) {
        console.log(`${i}Fizz`);
    }
    //faccio in moddo che numero che sia multiplo di 5 venga costrasegnato dalla parola Buzz   
    else if( i % 5 == 0 ) {
        console.log(`${i}Buzz`);
    }

    fizzbuzzdom.append(square);
}