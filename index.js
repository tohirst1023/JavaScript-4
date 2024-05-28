// // Math.ceil - Qoldiqni baland qib chiqaradi
// console.log(Math.ceil(2.9));

// // Math.floor - Qoldiqni pas qib chiqaradi
// console.log(Math.floor(2.9));

// // Math.round - Qoldiqni aniq chiqaradi
// console.log(Math.round(2.5));

// // Math.pow - Sonni neshtagacha ko'paytirish
// console.log(Math.pow(2, 3));

// // Math.sqrt - kvadrat ildizini qaytaradi:
// console.log(Math.sqrt(36));

// // Math.abs - sonni musbat qiladi:
// console.log(Math.abs(-22));

// // Math.min - sonlarni minimumini chiqaradi;
// console.log(Math.min(1, 2, 3));

// // Math.max - sonlarni maximumini chiqaradi;
// console.log(Math.max(1, 2, 3));

// // Math.cbrt - kubigi ildizini qaytaradi:
// console.log(Math.cbrt(27));

// // Math.random - sonlarni random qib chiqaradi:
// console.log(Math.random() * 100);

// Uy ishi

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
  alert(`Bu ${randomNumber} FizzBuzz`);
} else if (randomNumber % 3 === 0) {
  alert(`Bu ${randomNumber} Fizz`);
} else if (randomNumber % 5 === 0) {
  alert(`Bu ${randomNumber} Buzz`);
} else {
  alert(`Bu ${randomNumber} Fizz hammas, Buzz hammas`);
}
