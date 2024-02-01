/** Depth First Search **
 *
 * Return the depth first values of the given binary tree in
 * an array.
 *
 */

const depthFirstSearch = (root) => {
  const stack = [root];
  const results = [];

  while (stack.length > 0) {
    // .pop() removes the last element in the array and returns it
    let current = stack.pop();

    results.push(current.val);
    // order matters here; need to push right first because the top value can only be popped from the stack
    // this puts the right node below the left node in the stack so the left code can be popped on the next iteration
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }

  return results;
};

module.exports = depthFirstSearch;
