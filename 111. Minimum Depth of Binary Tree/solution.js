// https://leetcode.com/problems/binary-tree-preorder-traversal/description/


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

var preorderTraversal = function(root) {
    var res = [];
    var rightNodes = [];
    
    while(root || rightNodes.length>0) {
        if(root) {
            res.push(root.val);
            if(root.right) rightNodes.push(root.right);
            root = root.left;
        } else {
            root = rightNodes.pop();
        }
    }
    return res;
};