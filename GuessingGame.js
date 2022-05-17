let maximum = parseInt(prompt("Enter the max number"));
while (!maximum) {
    let maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum)

let guess = parseInt(prompt("Enter your first guess!"));
let attempts =1;

while (parseInt(guess) != targetNum) {
    if(guess === 'q') break;
    attempts++;
     if (guess > targetNum) {
         guess = prompt("Too high! Go lower");
     }  else {
        guess = prompt("Too low! Go higher");
     }
 }
     if(guess === 'q') {
         console.log('OK YOU QUIT!!')
     } else {
        console.log(`It took you ${attempts} attempts`)
 }
