var createCounter = function (init) {
  const num = init;
  return {
    increment: function () {
      return ++init;
    },
    reset: function () {
      init = num;
      return init;
    },
    decrement: function () {
      return --init;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); //
