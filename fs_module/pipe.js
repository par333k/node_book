const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);

// createReadStream으로 파일을 읽는 스트림을 생성하고, 그 스트림을 전달받아 createWriteStream 으로 파일을 쓴다.
// 이것을 스트림끼리 연결한다고 하며 파이핑한다고 표현한다.

