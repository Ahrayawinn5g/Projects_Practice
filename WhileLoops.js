// Not where while loops are best utilized, For Loops are commonly used here
// let num = 0
// while (num < 10) {
//     num++;
//     console.log(num);
// }

// While Loops are more useful when we have something that is truly varibale, like a game loop(chess or checkers)

// Simple example, asking a user to enter a password 
const SECRET = "PunkGibson";

let guess = prompt("Enter the secret code...")
while (guess !== SECRET) {
    guess = prompt("Enter the secret code...")
}
console.log("CONGRATS YOU CRACKED THE CODE!!!")