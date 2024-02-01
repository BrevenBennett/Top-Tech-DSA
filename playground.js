class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const G = new Node("G");

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

const search = (root, target) => {
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val === target) return true

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return false;
};

console.log(search(A, "f"))