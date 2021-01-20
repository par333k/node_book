const fs = require('fs').promises;

fs.copyFile('readme4.txt', 'writeme4.txt')
    .then(() => {
        console.log('복사 완료');
    })
    .catch((error) => {
        console.error(error);
    });


// 노드 8.5 버전 이후에는 스트림을 파이프 하지 않고 copyFile 메소드를 이용할 수 있다.
// 첫 번째 인수로 복사할 파일을, 두 번째 인수로 복사될 경로를, 세 번째 인수로 복사 후 실행될 콜백 함수를 넣는다.
