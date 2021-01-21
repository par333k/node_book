const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(err.message);
    }
})
    .listen(8081, () => {
        console.log('8081 포트에서 서버 대기중입니다!');
    });
/*
* html 정적 파일을 응답데이터로 전송. header에 컨텐츠 정보를 제공.
* Http 상태코드 
* 2xx : 성공
* 3xx : 리다이렉션 (이동), 304 는 요청의 응답으로 캐시를 사용했다는 뜻
* 4xx : 요청 오류를 나타냄, 
* 5XX : 서버 오류
* 에러가 나도 응답은 꼭 보내야함. 그렇지 않으면 클라이언트는 응답을 기다리다가 Timeout 처리되어버림
 */