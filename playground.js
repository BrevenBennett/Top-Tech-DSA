class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const A = new Node(1);
const B = new Node(2);
const C = new Node(3);
const D = new Node(4);
const E = new Node(5);
const F = new Node(6);
const G = new Node(7);

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

const sumOfTree = (root) => {
  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    sum += current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return sum;
};

console.log(sumOfTree(A))