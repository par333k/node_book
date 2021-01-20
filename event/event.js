const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
})
myEvent.once('event3', () => {
    console.log('이벤트 3');
}); // 한 번만 실행됨

myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2'); // 이벤트 호출

myEvent.emit('event3'); // 이벤트 호출
myEvent.emit('event3'); // 실행 안 됨

myEvent.on('event4', () => {
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안 됨

const listener = () => {
    console.log('이벤트 5');
};

myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); // 실행 안 됨

console.log(myEvent.listenerCount('event2'));

/*
* on(이벤트명, 콜백) : 이벤트 이름과 이벤트 발생 시의 콜백을 연결. 이벤트 리스닝이라고 부르며 event2 처럼 이벤트 하나에 이벤트 여러개를 달 수 있다
* addListener(이벤트명, 콜백) : on과 기능이 같습니다.
* emit(이벤트명) : 이벤트를 호출하는 메서드, 이벤트 이름을 인수로 넣으면 미리 등록해 뒀던 이벤트 콜백이 실행된다.
* once(이벤트명, 콜백) : 한 번만 실행되는 이벤트. 
* removeAllListeners(이벤트명) : 이벤트에 연결된 모든 이벤트 리스너를 제거
* removeListener(이벤트명, 리스너) : 이벤트에 연결된 리스너를 하나씩 제거합니다. 리스너를 인수로 꼭 넣어야 한다.
* off(이벤트명, 콜백) : 노드 10 버전에서 추가된 메서드로, removeListener와 기능이 같습니다.
* listenerCount(이벤트명) : 현재 리스너가 몇 개 연결되어 있는지 확인합니다.
 */
