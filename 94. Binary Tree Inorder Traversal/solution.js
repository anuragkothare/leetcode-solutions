/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var inorderTraversal = function(root) {
    var stack = [];
    var order = [];

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        var node = stack.pop();
        order.push(node.val);
        root = node.right;
    }
    return order;
};


// Iterative Solution

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [],
        result = [],
        cur;
    cur = root;
    while (stack.length > 0 || cur !== null) {
        if (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            result.push(cur.val);
            cur = cur.right;
        }
    }
    return result;
};
