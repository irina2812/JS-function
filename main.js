// задание 
// найти сумму всех чисел последовательно и после найти средне арефметическое этих чисел
// 1+2+3+4+5 = 15 / 5 = 3

let n = Number(prompt('Введите число'))

// ================================
function sum(n){
    if(n != 1) {return n + sum(n - 1)} 
    else{return 1}
  }
  console.log(sum(n))
  console.log(sum(n)/n)

//   ПОЧЕМУ  ЕСЛИ СДЕЛАТЬ N != 0 ОН БУДЕТ СЧИТАТЬ СУММУ С ЛИШНЕЙ ЕДИНИЧКОЙ, ЕСЛИ 1 + (1-1) = 1
// function test(n){
//     if(n != 0) {return n + test(n - 1)} 
//     else{return 1}
//   }
//   console.log(test(n))
//   console.log(test(n)/n)