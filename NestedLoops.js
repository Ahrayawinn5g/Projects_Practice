let str = 'LOL';

// for (let i = 0; i <= 4; i++) {
//     console.log('Outer:', i);
//     for (let j = 0; j < str.length; j++) {
//         console.log(      'Inner', str[j]);
//     }
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(    `j is: ${j}`)
//     }
// }

const seatingChart = [
    ['Kristen', 'Vic', "Drew"],
    ['Naomi', 'Dawa', 'Jordyn', 'Josiah'],
    ['Gregory', 'Tenicha', 'Jonathan', 'Mario'],
    ['Sloan', 'Manny', 'Ari', 'Colt']
]

// // Only print's the seatingChart Array, doesn't print out each indiviual name 
// for (let s = 0; s < seatingChart.length; s++) {
//     console.log(seatingChart[s])
// }

for (let s = 0; s < seatingChart.length; s++) {
    const row = seatingChart[s];
    console.log(`ROW #${s + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}