setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
  console.log('timeout');   
}, 0);

Promise.resolve().then(() => console.log('promise'));

// process.nextTick은 setImmediate나 setTimeout보다 먼저 실행된다. 코드 맨 밑에 Promise를 넣은 것은
// 이는 기술적으로 process.nextTick() 이 이벤트루프의 일부가 아니기 때문이다. 
// process.nextTick()은 그래서 현재 작업이 완료된 후에 '즉시'실행된다. 그래서 setImmediate보다 의미적으로 더 즉시에 가깝다.
// resolve 된 Promise도 nextTick처럼 다른 콜백들보다 우선시 되기 때문이다. 그래서 process.nextTick과 Promise를 마이크로태스크(microtask)라고 따로 구분지어 부른다.
// process.nextTick으로 받은 콜백 함수나 resolve된 Promise는 다른 이벤트 루프에서 대기하는 콜백 함수보다도 먼저 실행된다.
// 그래서 비동기 처리를 할 때 process.nextTick을 더 선호하는 개발자도 있다. 하지만 이런 마이크로태스크를 재귀 호출하게 되면
// 이벤트 루프는 다른 콜백 함수보다 마이크로테스크를 우선처리 하므로 콜백함수들이 실행되지 않을수도 있다.
// 따라서 process.nextTick이나 Promise의 resolve를 재귀로 호출하는 것은 주의해야한다.

// process.nextTick()을 쓰는 두 가지 주요 이유는 다음과 같다.
// 사용자가 오류를 처리하고, 불필요한 리소스를 정리하거나, 이벤트 루프가 계속되기 전에 요청을 다시 시도 할 수 있습니다.
// Allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again before the event loop continues.
// 호출 스택이 풀린 후 이벤트 루프가 계속되기 전에 콜백이 실행되도록 허용해야하는 경우가 있습니다.
// At times it's necessary to allow a callback to run after the call stack has unwound but before the event loop continues.
// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
