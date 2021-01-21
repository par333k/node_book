const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`마스터 프로세스 아이디: ${process.pid}`);
    // CPU 개수만큼 워커를 생산
    for (let i = 0; i < numCPUs; i += 1) {
        cluster.fork();
    }
    // 워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        console.log('code', code, 'signal', signal);
        cluster.fork(); // 종료되면 실행 - 좋은 방법 아님, 에러 원인을 파악해야함!
    });
} else {
    // 워커들이 포트에서 대기
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster!</p>');
        setTimeout(() => { // 워커가 존재하는지 확인하기 위해 1초마다 강제 종료
            process.exit(1);
        }, 1000);
    }).listen(8086);

    console.log(`${process.pid}번 워커 실행`);
}

/*
*  워커 쓰레드의 예제와 모양이 비슷하지만 쓰레드-프로세스라는 차이가 있다.
*  클러스터에는 마스터 프로세스와 워커 프로세스가 있고 마스터 프로세스는 CPU 개수만큼 워커 프로세스를 만든다
*  setTimeout 부분을 통해 요청이 들어올때마다 1초 뒤 서버가 종료되도록 함.
*  실무에서는 pm2 등으로 cluster 기능을 사용하는 편
 */