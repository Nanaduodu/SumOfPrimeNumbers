var num = Number(prompt("Enter your number: "));
var prime_num = [];

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) if (num % i === 0) return false;

  return true;
}

function printPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      prime_num.push(i);
    }
  }
}

printPrime(num);

var num_of_prime = prime_num.length;
var sum = 0;

for (i = 0; i < num_of_prime; i++) {
  sum += prime_num[i];
}

console.log(sum);
var num = Number(prompt("Enter your number: "));
var prime_num = [];

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) if (num % i === 0) return false;

  return true;
}

function printPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      prime_num.push(i);
    }
  }
}

printPrime(num);

var num_of_prime = prime_num.length;
var sum = 0;

for (i = 0; i < num_of_prime; i++) {
  sum += prime_num[i];
}

console.log(sum);
