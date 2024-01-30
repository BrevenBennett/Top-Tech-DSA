class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

  print() {
    let length = 0;
    let curr = this;

    while (curr) {
      length++;
      curr = curr.next;
    }

    console.log(length);
  }
}

const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(4567, null)))));

head.print()
