//Generate Fibonacci Sequence

const fib = (n) => {
  if (n <= 1) return n;

  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
};

console.log(fib(2));
