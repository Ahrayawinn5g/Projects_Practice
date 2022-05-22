const subreddits = ['cringe', 'books', 'chickens', 'anime', 'sports', 'luffy']

for(let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for(let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`)
}


for(let char of "hello world") {
    console.log(char)
}

const numbers = [1,2,3,4,5,6,7,8,9];

for(let squares of numbers){
    console.log(Math.pow(squares,2));
}