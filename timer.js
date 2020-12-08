const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다');
});

clearImmediate(immediate2);

//clear~(선언된 함수)의 경우 작업을 취소시킴
//immdiate 즉시, timeout 일정시간뒤, interval 일정시간단위반복
//settimeout(callback, 0)은 immdiate와 순서를 보장하지 않는다. 즉시 실행해야할 경우 immdiate 권장 