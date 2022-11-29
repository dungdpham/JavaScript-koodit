'use strict';

const candidates = [];
let nimet = '';
const cand_total = +prompt('Please enter the number of candidates:');
for (let i=1; i<=cand_total; i++) {
    const nimi = prompt(`Please enter ${i}. candidate's name:`);
    if (i===cand_total) {
        nimet += nimi;
    } else nimet += nimi + ', ';
    let candidate = {
        name: nimi,
        vote: 0
    }
    candidates.push(candidate);
}
//console.log(candidates);
//console.log(nimet);

const voters = +prompt('Please enter the number of voters:');
for (let j=1; j<=voters; j++) {
    const vote_for = prompt(`Who would the ${j}. voter vote for: ${nimet}?`);
    for (let candidate of candidates) {
        if (candidate.name.toLowerCase()===vote_for.toLowerCase()) {
            candidate.vote += 1;
        }
    }
}
//console.log(candidates);

candidates.sort((a, b) => b.vote-a.vote);
//console.log(candidates);

let winner = candidates[0].name;
for (let k=1; k<cand_total; k++) {
    if (candidates[k].vote === candidates[0].vote) {
        winner += ' and ' + candidates[k].name;
    }
}
//console.log(winner);

console.log(`The winner(s) is ${winner} with ${candidates[0].vote} votes.`);
console.log('Results:');
for (let candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.vote} votes.`)
}