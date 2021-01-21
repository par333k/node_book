const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다!');
    });

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>Hello Node!2</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기 중입니다!');
    });

// 다수의 서버 한번에 올리기, 포트번호가 달라야 한다. 실무에서는 거의 사용하지 않음.
