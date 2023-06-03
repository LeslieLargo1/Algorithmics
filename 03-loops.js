// // 1-10  //

// var n = 10;
// for (let i=1; i <= n ; i++){

//     console.log(i)
// }



// // 10 - 1 //

// var n = 1;
// for (let i = 10 ; i >= n ; i--){
//  console.log(i)
// } 


// // ( -10) - (10) //

// var n = 10;
// for (let i = -n ; i <= n ; i++){
//  console.log(i)
// } 


// odd numbers from 1 - 10//

// var n = 10;
// for (let i=1; i <= n ; i++){
//     if (i % 2 !== 0)

//     console.log(i )
//  }

// prints random number and prints to 0  //


 
// function printNumbers(randomNum) {
//     for (let i = 0; i < randomNum; i++) {
//         console.log(i);
//     }
// }

// const randomNumber = Math.floor(Math.random() * 5) + 1;

// printNumbers(randomNumber);




// need to finish setion 3 -5 of loops 

// function throwDice(times){

// }
// need an equation to count (x) amount of times thiat any of these [1,2,3,4,,5,6] repeat

let count = 0;
numbRe = 6;
numbThr = 6;
for (let i = 1; i <= 6; i++) {
    const diceNum = Math.floor(Math.random() * 6 ) +1;
       if (numbRe == diceNum) {
        count++;
       }
    
    

    }

console.log("number" +' '+ numbRe +  + ' ' +" occured"+ ' ' + count + ' ' + "in the number of throws" + numbThr);



// III - throw dices
// Write an algorithm which throws a 
//dice   

// a given number of time and 
//count the number of time a certain number is received.




// IV - even numbers
// Write an algorithm which prints all the even numbers from 0 to a given number.

// V - perfect number
// Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).
