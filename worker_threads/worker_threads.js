const {
    Worker, isMainThread, parentPort,
} = require('worker_threads/worker_threads');

if (isMainThread) { // 부모일 때 - 기존에 동작하던 싱글 스레드를 메인 또는 부모 스레드라고 부른다
    const
        worker = new Worker(__filename);
        worker.on('message', message => console.log('from worker', message)); // worker.on('message')로 메시지를 받는다. 한번만 받고싶다면 once
        worker.on('exit', () => console.log('worker exit'));
        worker.postMessage('ping');
} else { // 워커일 때 
    parentPort.on('message', (value) => { // parentPort.on('message') 이벤트 리스너로 부모로부터 메세지를 받음
        console.log('from parent', value);
        parentPort.postMessage('pong'); // parentPort.postMessage로 부모에게 메세지를 보낸다.
        parentPort.close(); // 부모와의 연결이 종료되고 종료될 때는 worker.on('exit')이 실행됨
    });
}

// 워커에서 on 메서드를 사용할 때는 직접 워커를 종료해야한다. 
