const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});

fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});

fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');

// 호출 순서의 결과가 실행할때마다 다르다. 왜냐면 fs 모듈은 백그라운드에 I/O 요청을 위임해서 비동기식으로 처리하기 때문이다.
// 동기와 비동기는 백그라운드 작업 완료의 확인 여부에 대해 뜻하는 것이고
// 블로킹과 논 블로킹은 함수가 바로 리턴되는지의 여부를 확인한다.
// 동기- 블로킹, 비동기 - 논 블로킹 방식으로 실행되는 경우가 대부분이다.