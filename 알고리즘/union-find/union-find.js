let parent = [];

// 초반에는 자기 자신을 포함 한다.
for (let i = 0; i < n; i++) parenr[i] = i;

const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

const unionParent = (parent, x, y) => {
  const s1 = getParent(parent, x);
  const s2 = getParent(parent, y);
  if (s1 < s2) return (parent[s2] = s1);
  else return (parent[s1] = s2);
};

// x와 y가 속한 집합(parent)이 같은 부모를 갖는지 확인한다.
const findParent = (parent, x, y) => {
  const s1 = getParent(parent, x);
  const s2 = getParent(parent, y);
  if (s1 === s2) return true;
  else return false;
};
