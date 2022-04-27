console.log("hello there")

const firstName = prompt("Enter your first name");
if (!firstName) {
    firstName = prompt("TRY AGAIN")
}

const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR CITIZEN")
}