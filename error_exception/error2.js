const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000);

// 에러가 발생하지만 노드 내장 모듈의 에러는 실행 중인 프로세스를 멈추지 않음
// throw를 하면 노드 프로세스가 멈추기 때문에 반드시 try-catch 문으로 throw한 에러를 잡아야 한다.