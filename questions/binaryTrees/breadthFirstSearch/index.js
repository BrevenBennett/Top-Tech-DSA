/** Breadth First Search **
 *
 * Return the breadth first values of the given binary tree in
 * an array.
 *
 */

const breadthFirstSearch = (root) => {
  const queue = [root];
  const results = [];

  while (queue.length > 0) {
    // shift method returns the first element of the array and removes it
    const curr = queue.shift();

    results.push(curr.val);
    
    if (curr.left !== null) queue.push(curr.left);
    if (curr.right !== null) queue.push(curr.right);
  }
  
  return results
};

module.exports = breadthFirstSearch;
