const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');

// readFileSync 메서드를 사용하면 요청이 수백 개 이상 들어올 때 성능에 문제가 생길 수 있다.
// 백그라운드가 작업하는 동안 메인 스레드가 일을 하지 못하고 대기해야한다.
