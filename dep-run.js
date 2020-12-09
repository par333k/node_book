//모듈 사용시 주의할 점. 두 모듈 dep1, dep2가 있고 이 둘이 서로를 require한다면?

const dep1 = require('./dep1');
const dep2 = require('./dep2');
dep1();
dep2();

// 위에서부터 실행되므로 require dep1이 먼저 실행됨 dep1에서는 require dep2가 실행됨, dep2에서는 다시 require dep1이 실행됨. 이것이 반복.
// 실행해보면 dep1 의 module.exports가 함수가 아니라 빈 객체로 표시됨. 
// 이러한 현상을 순환 참조(circular dependency)라고 부름. 이렇게 순환참조가 있을 경우 순환 참조되는 대상을 빈 객체로 만든다.
// 에러가 발생하지 않고 빈 객체로 변경되므로 예기치 못한 동작이 발생. 따라서 서로를 참조하지 않도록 구조를 잡는게 중요.
