/**
 * @param {Function} fn
 */
function memoize(fn) {
  let cache = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    console.log(JSON.stringify(args))
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key,fn(...args));
    //console.log(`from fn: ${cache.get(key)}`);
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3);
memoizedFn(2, 3);
memoizedFn(0, 0);
memoizedFn(0, 0);
console.log(callCount);
