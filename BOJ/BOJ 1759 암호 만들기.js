const [num, temp] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');

const [L, _] = num.split(' ').map(Number);
const alphas = temp.split(' ').map(e => e).sort();
const vowel = ['a', 'i', 'e', 'o', 'u'];

function combinations (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const cases = combinations(rest, selectNumber - 1); 
      const attached = cases.map((el) => [fixed, ...el]); 

      results.push(...attached); 
    });

    return results; 
}

for (let combis of combinations(alphas, L)) {
    let [numVowel, numConsonant] = [0, 0];
    for (let combi of combis) {
        if (vowel.includes(combi)) {
            numVowel += 1;
            continue;
        } 

        numConsonant += 1;
    }

    if (numVowel >= 1 && numConsonant >= 2) console.log(combis.join(''));
}
