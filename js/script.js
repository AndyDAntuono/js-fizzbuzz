/*
for (let i = 1; i < 10; i++) {
    console.log(i);
    if(i % 2==0){
        console.log
    }
}
*/

//calcolo un for che rappresenti un ciclo che parta dal numero fino al numero 100
for (let i=1; i <= 100; i++){
    console.log(i);
    //faccio in moddo che numero che sia multiplo di 3 che di 5 venga costrasegnato dalla parola Fizzbuzz
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
}