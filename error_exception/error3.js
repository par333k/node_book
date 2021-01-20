const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./abcdefg.js')
}, 1000);

// 프로미스의 에러는 catch하지 않아도 알아서 처리되지만 버전이 변경되면서 가이드가 바뀔 수 있기 때문에
// 기본적으로 try-catch로 처리하는걸 권장
