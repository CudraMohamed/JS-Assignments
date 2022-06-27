function rangeLoop(){
    for (let num = 0; num <=100; num++){
        if (num % 3 ===0 && num % 5 ===0){
            console.log(num,"-> FizzBuzz");
        }
        else if (num%3===0){
            console.log(num,"-> Fizz");
        }
        else if(num % 5===0){
            console.log(num,"-> Buzz");
        }
        
    }
}
rangeLoop();

numbThree=0;
numbFive=0;
function sum(){
    for (let i = 0;i<=1000;i++){
        if (i%3===0){
            let numbThree=i
            console.log(numbThree,`is divisible by 3`)
        }
        else if(i%5===0){
            let numbFive=i
            console.log(numbFive,`is divisible by five`)
        }
        else{
            let total=numbThree + numbFive
            console.log(i,`->`,total)
        }
    }
}
sum();

function evenAndOdd(){
    for(let numbr=0;numbr<=20;numbr++){
        if(numbr%2!==0){
            console.log(numbr,`is odd`);
        }
        else{
            console.log(numbr,`is even`);
        }
    }
}
evenAndOdd();

// function greaterInTheLoop(){
//     let num = [-2,4,-5,6,0]
//     var greatest= num[0]
//     for (let numm=0;numm<num.length;numm++){
//         if(greatest<num[numm]){
//             greatest=num[numm]
            
//         }
//     }
//     console.log(`greatest in the loop is`,num)
// }
// greaterInTheLoop()

function largest(){
    let numb1=10;
    let numb2=40;
    if (numb1 > numb2){
        console.log(numb1,`numb1 is greater`);
    }
    else{
        console.log(numb2,`numb2 is greater`);
    }
}
largest();

function leapYears(){
    for (let yr=2000;yr<=2022;yr++){
        if(yr % 4 ===0|| yr % 400 ===0){
            console.log(yr,"is a leap year");
        }
        else{
            continue;
        }
    }
}
leapYears();