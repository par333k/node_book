const url = require('basic/url');
const querystring = require('basic/querystring');

const parseUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));

/*
querystring.parse(쿼리): url의 query 부분을 자바스크립트 객체로 분해합니다.
querystring.stringify(객체): 분해된 query 객체를 문자열로 다시 조립합니다.
*/

