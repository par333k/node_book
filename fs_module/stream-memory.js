const fs = require('fs');

console.log('before: ', process.memoryUsage().rss); // 약 20메가

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss); // 약 30메가
});


//스트림을 사용할 경우 버퍼에비해 훨씬 메모리 사용량을 낮출 수 있다.
