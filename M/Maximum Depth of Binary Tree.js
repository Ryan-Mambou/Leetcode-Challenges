 /**
 Base case if root equals null then retrun 0
 Then Recursive call on left and right side */
 var maxDepth = function(root) {

    if(root === null) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
