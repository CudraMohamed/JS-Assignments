
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
function rangeLoop(){
    for (let num = 1; num <=100; num++){        //loop through range(1-100)
        if (num % 3 ===0 && num % 5 ===0){      //check for multiples of 3 & 5
            console.log(num,"-> FizzBuzz");
        }
        else if (num%3===0){                       //check for multiples of 3
            console.log(num,"-> Fizz");
        }
        else if(num % 5===0){                       //check for multiples of 5
            console.log(num,"-> Buzz");
        }
        
    }
}
rangeLoop();    //invoke the function

//Write a JavaScript program to sum the multiples of 3 and 5 under 1000
let addition=0;
function sum(){
    for (let i = 0;i<=1000;i++){        //loop through the range(0-1000)
        if (i%3===0 && i%5===0){
            addition+=i;
        }
    }
    console.log(`The sum of multiples of 3 and 5 ->`,addition)    
}
sum();

//Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
function evenAndOdd(){
    for(let numbr=0;numbr<=20;numbr++){
        if(numbr%2!==0){        //check if a value is not a multiple of 2
            console.log(numbr,`is odd`);        //execute results
        }
        else{
            console.log(numbr,`is even`);
        }
    }
}
evenAndOdd();

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
function greaterInTheLoop(){
    let num = [-2,4,-5,6,0];     //assign a list to variable num
    var greatest= num[0];
    for (let numm=0;numm<num.length;numm++){        //loop through the length of the list
        if(greatest < num[numm]){                   //check if the value in the block variable is less than the value in the list
            greatest=num[numm];
            
        }
    }
    console.log(`greatest in the loop is`,greatest);
}
greaterInTheLoop();

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function largest(){
    let numb1=10;   //declare  variable numb1 and assign it a value 10
    let numb2=40;
    if (numb1 > numb2){         //compare the variable if numb1 is less than numb2
        console.log(numb1,`numb1 is greater`);
    }
    else{
        console.log(numb2,`numb2 is greater`);      //if not,execute this
    }
}
largest();

// Write a JavaScript program to find leap years from 2000 to 2022
function leapYears(){
    for (let yr=2000;yr<=2022;yr++){    //loop through the years
        if(yr % 4 ===0|| yr % 400 ===0){        //check if the year is a leap yr
            console.log(yr,"is a leap year");       //execute ans
        }
        else{
            continue;       //if false, do not execute, skip to the next yr
        }
    }
}
leapYears();