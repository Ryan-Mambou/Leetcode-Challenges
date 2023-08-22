/**BFS */

var invertTree = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return root;

    bfs([root]);

    return root;
  
};

const bfs = (queue) => {
    while (queue.length) {
        for (let i = 0; (queue.length - 1) >= i; i++) {
            const node = queue.shift();
            let temp = node.left
            node.left = node.right;
            node.right = temp;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}
