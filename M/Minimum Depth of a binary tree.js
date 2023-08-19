/**BFS, verifying at each level if node has left and right child, if none, return minDepth else continue to navigate */

var minDepth = function(root) {

    if (!root) return 0

    let minDepth = 1
    let queue = [root]

    while(queue){
        let levelSize = queue.length
        while(levelSize){
            let current = queue.shift()
            if(current.left == null && current.right == null){
                return minDepth;
            }
            else {
            if(current.left !== null) queue.push(current.left)
            if(current.right !== null) queue.push(current.right)
            }
            levelSize--
        }
        minDepth++
    }
    return minDepth
};