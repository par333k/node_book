const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {
    highWaterMark: 16 // 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션, 기본은 64KB이나 이번엔 16B로 변경
});

const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error :', err);
})