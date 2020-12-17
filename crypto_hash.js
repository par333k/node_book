const crypto = require('crypto');

// 단방향 암호와 알고리즘 : 복호화 할 수 없는 암호와 방식. 원래 문자열을 찾을 수 없다.
// 해시 기법 사용. 실례: 회원 비밀번호
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

/*
createHash(알고리즘): 사용할 해시 알고리즘을 넣는다. md5, sha1, sha256, sha512 등이 있고, md5와 sha1은 이미 취약점이 발견되었다. sha256, 512를 주로 사용하나 취약점 발견 시 더 강화된 알고리즘 필요
update(문자열): 변환 할 문자열을 넣는다
digest(인코딩): 인코딩할 알고리즘을 넣는다. base64, hex, latin1이 주로 사용되는데, 그 중 base64가 결과 문자열이 가장 짧아 애용된다. 결과물로 변환된 문자열을 반환한다.
해시 기반이라는 것은 해시함수 충돌문제가 있다는 것을 뜻한다. 따라서 가끔 특정 문자열이 변환된 결과가 다른 문자열에 대한 똑같은 결과로 충돌할 수도 있다. 
이를 방지하기 위해 해시 함수 알고리즘을 고도화 하고 있는 것이다.
*/