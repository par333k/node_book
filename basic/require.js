console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache); // 한 번 require한 파일은 require.cache에 저장됨
console.log('require.main 입니다.');
console.log(require.main === module); // require.main은 노드 실행시 첫 모듈을 가리킴. 첫 모듈인지 알아보려면 === module로 비교해보면 됨. true/false
console.log(require.main.filename); // 첫 모듈의 이름
