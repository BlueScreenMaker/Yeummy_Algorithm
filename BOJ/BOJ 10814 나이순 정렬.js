const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const peoples = [];
const _ = input.splice(0, 1)[0];

input.forEach((e, i) => {
    const [age, name] = e.split(' ');
    peoples.push({
        id: i,
        age: parseInt(age),
        name
    })
})

peoples.sort((a, b) => {
    if (a.age === b.age) return a.id - b.id;
    return a.age - b.age;
})

peoples.forEach(people => {
    const {age, name} = people;
    console.log(age, name);
})