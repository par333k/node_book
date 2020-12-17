const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    // 64바이트 길이의 문자열을 randomBytes() 메서드로 생성해서 salt에 할당
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    // sha512로 변환된 결괏값을 다시 sha512로 변환하는 과정을 10만번 반복 적용
    // 반복회수는 성능에 맞게 조절
    // 내부적으로 스레드풀을 사용해 멀티 스레딩으로 동작하므로 블럭되지 않음
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    });
});

// 매번 실행할 때 마다 결과가 달라지므로 salt를 잘 보관하고 있어야 비밀번호를 찾을 수 있다
// pbkdf2는 간단하지만 bcrypt나 scrypt보다는 취약한 편
