const [N, inputs] = require("fs").readFileSync(__dirname + "/example.txt").toString().trim().split("\n");
const data = inputs.split(' ').map(Number);
const ans = Array(Number(N)).fill(-1);
const stack = [];

for (let i = 0; i < Number(N); i++) {

    if (!stack.length) stack.push([i, data[i]]);
    else {
        while (stack.length && stack[stack.length - 1][1] < data[i]) {
            const [idx, _] = stack.pop();
            ans[idx] = data[i];
        }

        stack.push([i, data[i]]);
    }
}

console.log(ans.join(' '));
