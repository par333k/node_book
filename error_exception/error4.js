process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);

// process 객체에 예상치 못한 에러 메세지를 이벤트 리스너로 달았기 때문에 프로세스가 에러에도 죽지 않는다.
// 이 부분이 없다면 프로세스가 멈춘다.
// 이 방법은 공식문서에서 최후의 최후의 수단으로 사용할 것을 명시.
// node 는 uncaughtException 이벤트 발생 후 다음 동작이 제대로 동작하는지 보증하지 않으며
// 복구 작업 코드를 넣어 두었더라도 그것이 동작하는지 확신할 수 없다.
// 따라서  uncaughtException은 단순히 에러 내용을 기록하는 정도로 사용하고, 에러를 기록 후 process.exit()으로 프로세스를 종료하는 것이 좋다.
// 서버 운영은 에러와의 싸움으로, 철저하게 기록(logging)하고 확인해야함.
