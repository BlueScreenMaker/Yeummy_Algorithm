/**
 * 노드가 N개인 이진 트리가 있다.
 *
 * 트리를 중위 순회와 유사하게 순회하려고 한다.
 *
 * 이를 유사 중위 순회라고 하자
 *
 * 유사 중위 순회는 루트 노드에서 시작하며, 다음과 같이 진행된다.
 *
 * 1. 현재 위치한 노드의 왼쪽 자식 노드가 존재하고 아직 방문하지 않았다면, 왼쪽 자식 노드로 이동한다.
 * 2. 그렇지 않고 현재 위치한 노드의 오른쪽 자식 노드가 존재하고 아직 방문하지 않았다면 오른쪽 자식 노드로 이동한다.
 * 3. 그렇지 않고 현재 노드가 유사 중위 순회의 끝이라면 유사 중위 순회를 종효한다.
 * 4. 그렇지 않고 부모 노드가 존재한다면, 부모 노드로 이동한다.
 * 5. 유사 중위 순회를 종료할 때까지 1~4번을 반복한다.
 *
 */

const [num, ...input] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const isVisited = Array.from(Array(+num), () => false);
const tree = new Map();
let count = 0;

// 등록되어 있는 트리를 만들어야 한다.
for (let i = 0; i < +num; i++) {
  const [parent, left, right] = input[i].split(' ').map(Number);

  tree.set(parent, [left, right]);
}

function inorder(node) {
  const [left, right] = tree.get(node);

  if (left !== -1 && !isVisited[left]) {
    inorder(left);
    isVisited[left] = true;
  }

  if (right !== -1 && !isVisited[right]) {
    inorder(right);
    isVisited[right] = true;
  }
}

inorder(1);
console.log(count);
