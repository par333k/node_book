setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마!');
    } catch (err) {
        console.error(err);
    }
}, 1000);


// 에러는 발생하지만 try-catch 문으로 잡을 수 있고
// 실행도 멈추지 않는다.
