/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 **/
var reduce = function (nums, fn, init) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    answer = fn(init, nums[i]);
    init= answer;
  }
  return answer
};

nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + (curr * curr);
};
init = 100;
reduce(nums, fn, init);
//console.log(reduce(nums, fn, init));
