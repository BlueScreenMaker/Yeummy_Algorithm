const [N, input] = require("fs").readFileSync(__dirname + '/example.txt').toString().trim().split("\n");
const data = input.split(' ').map(Number);
const stack = [];
const ans = Array(Number(N - 1)).fill(0);

for (let i = Number(N) - 1; i >= 0; i--) {
	if (!stack.length) stack.push([i, data[i]]);
	else {

		while (stack.length && stack[stack.length - 1][1] < data[i]) {
            const [index, _] = stack.pop();
            ans[index] = i + 1;
        }

		stack.push([i, data[i]]);
	}
}

console.log(ans.join(' '));
