const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    // 주소가 /login으로 시작하는 경우
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        // 쿠키 유효 시간을 현재 시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires= ${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    } else if (cookies.name) { //name이라는 쿠키가 있는 경우
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
    } else {
        try {
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
            res.end(err.message);
        }
    }


})
    .listen(8084, () => {
       console.log('8084번 포트에서 서버 대기 중입니다!');
    });


/*
* 쿠키명=쿠키값: 기본적인 쿠키의 값
* Expires=날짜: 만료 기한, 이 기한이 지나면 쿠키가 제거됨, 기본 값은 클라이언트가 종료될 때 까지 
* Max-age=초: Expires와 비슷하지만 날짜 대신 초를 입력할 수 있습니다. 해당 초가 지나면 쿠키가 제건되며 Expires보다 우선
* Domain=도메인명: 쿠키가 전송될 도메인을 특정할 수 있습니다. 기본값은 현재 도메인.
* Path=URL: 쿠키가 전송될 URL을 특정할 수 있다. 기본값은 '/'이고, 이 경우 모든 URL에서 쿠키를 전송할 수 있다.
* Secure: HTTPS일 경우에만 쿠키 전송된다
* HttpOnly: 설정 시 자바스크립트에서 쿠키에 접근할 수 없습니다. 쿠키 조작을 방지하기 위해 설정하는 것이 좋다
* 쿠키는 브라우저에서 확인 가능하므로 민감한 개인정보를 쿠키에 담아서는 안됨.
 */