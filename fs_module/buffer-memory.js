const fs = require('fs');

console.log('before: ', process.memoryUsage().rss); // 약 20MB의 메모리 사용

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss); // 약 1기가의 메모리 사용

