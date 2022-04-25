let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!")
    console.log(random);
}

if (random >= 0.5) {
    console.log("YOUR NUMBER IS MORE THAN 0.5!!")
    console.log(random);
}

const dayOfWeek = "Sunday";

if (dayOfWeek === 'Monday') {
    console.log("ughh i hate mondays")
} else if (dayOfWeek === 'Saturday') {
    console.log("cheers to the weekend mate")
} else if (dayOfWeek === 'Sunday') {
    console.log("noooo the weekend is almost over")
}

const age = 65;

if (age < 5) {
    console.log("you are a baby, you get in for free")
} else if (age < 10) {
    console.log("You are a child. you have to pay 10$ to enter the theme park")
} else if (age < 65) {
    console.log("You are an adult. You pay 20$")
} else if (age >= 65) {
    console.log("You are a Senior citizen so you get a 10$ dicount. You pay 10$")
}