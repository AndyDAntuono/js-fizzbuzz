/*
for (let i = 1; i < 10; i++) {
    console.log(i);
    if(i % 2==0){
        console.log
    }
}
*/

for (var i=1; i <= 100; i++){
    console.log(i);
    if( i % 3 && x % 5 ) {
        console.log(`${i}FizzBuzz`);
    } else {
        if( i % 3 == 0 ) {
            console.log(`${i}Fizz`);
        }
        if( x % 5 == 0 ) {
            console.log(`${i}Buzz`);
        }
    }
}​