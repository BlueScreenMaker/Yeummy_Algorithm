console.log(
    require('fs').readFileSync(__dirname + '/dev/stdin')
        .toString()
        .trim()
        .split('\n')
        .splice(1)
        .reduce((acc, cur) => { 
            if (Number(cur) === 0) acc.pop();
            else acc.push(Number(cur));
            return acc;
        }, [])
        .reduce((acc, cur) => acc + cur, 0)
);
