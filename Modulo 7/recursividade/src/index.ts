const printNumbers = (n: number) => {
  if (n >= 0) {
    printNumbers(n - 1);
    console.log(n);
  }
};

const printNumbers = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbers(n - 1);
  }
};

export const calculateSumTo = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc;
  }
  return calculateSumTo(n - 1, acc + n);
};


// Exemplos de uso:
console.log(calculateSumTo(3));
console.log(calculateSumTo(10));
console.log(calculateSumTo(100));

export const calculateSumTo = (n: number): number => {
  var sum = 0
	for (var i = 0 ; i <= n ; i++) {
        sum += i;
  }
	return sum;
};
	
// Exemplos de uso:
console.log(calculateSumTo(3));
console.log(calculateSumTo(10));
console.log(calculateSumTo(100));
export const printArray = (arr: number[], i: number = arr.length - 1) => {
  if (i >= 0) {
    printArray(arr, i - 1);
    console.log(`Elemento ${i}: `, arr[i]);
  }
};

// Exemplo de uso:
const array = [1, 2, 3, 4];
printArray(array);

export const getNumDigits = (num: number, acc: number = 1): number => {
  if (num < 10) {
    return acc;
  }
  return getNumDigits(num / 10, acc + 1);
};

// Exemplos de uso
console.log(getNumDigits(0));
console.log(getNumDigits(10));
console.log(getNumDigits(2034));

export const getArrayMaximum = (
  arr: number[],
  i: number = 0,
  largest: number = 0
): number => {
  let largestAux = largest;
  if (arr[i] > largest) {
    largestAux = arr[i];
  }
  if (i === arr.length - 1) {
    return largestAux;
  }

  return getArrayMaximum(arr, i + 1, largestAux);
};

//Exemplos de uso
console.log(getArrayMaximum([2, 10, 8, 5, 4]));

export const findFirstCapitalLetter = (
  s: string,
  char: string = ""
): string => {
  if (char && char.toUpperCase() === char) {
    return char;
  }
  return findFirstCapitalLetter(s.substring(1), s[0]);
};

function power(a: number, b: number): number {
  if (b < 0) {
    return 0; // Erro
  } else if (b === 0) {
    return a;
  } else {
    return a * power(a, b - 1);
  }
}

function allFib(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log(`i: ${fib(i)}`)
  }
}

function fib(n: number) : number {
  if(n <= 0){
    return 0
  } else if( n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}