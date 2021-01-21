const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(8080, () => { // 서버 연결
       console.log('8080번 포트에서 서버 대기 중입니다!');
    });

/*
* res.writeHead : 응답에 대한 정보를 기록하는 메서드, 첫번쨰 인수로 응답코드, 두번째 인수로 응답헤더 정보
* res.write : 첫번째 인수는 클라이언트에 보낼 데이터(body)
* res.end : 응답을 종료하는 메서드, 인수가 있다면 데이터를 클라이언트에 보내고 종료.
* 브라우저는 응답 내용을받아서 렌더링 함.
 */