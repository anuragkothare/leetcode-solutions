// https://leetcode.com/problems/path-sum-ii/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */



var pathSum = function(root, sum) {

  var ret = [];
  if(root === null){
      return ret;
  }
  TreeNode.prototype.path = [];
  TreeNode.prototype.pathnum = 0;
  root.pathnum = root.val;
  root.path.push(root.val);
  findsum(root);
  return ret;

  function findsum(node){
      if(node.left === null && node.right === null){
          if(node.pathnum == sum){
              ret.push(node.path);
          }else{
              return;
          }
      }
      if(node.left!==null){
          node.left.pathnum = node.pathnum + node.left.val;
          node.left.path = node.path.concat(node.left.val);
          findsum(node.left);
      }
      if(node.right!==null){
          node.right.pathnum = node.pathnum + node.right.val;
          node.right.path = node.path.concat(node.right.val);
          findsum(node.right);
      }
  }

};