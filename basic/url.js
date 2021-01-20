// usl 모듈 안에는 URL 생성자가 있다. 이 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리된다(WHATWG 방식)
const url = require('basic/url');

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('------------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));

/*
url.parse(주소): 주소를 분해한다. WHATWG 방식과 비교하면 username, password 대신 auth 속성이 있고, searchParams대신 query가 있다.
url.format(객체): WHATWG 방식 url과 기존 노드의 url을 모두 사용할 수 있다. 분해되었던 url 객체를 다시 원래 상태로 조립한다.
WAHTWG 와 노드의 url은 취향에 따라 사용하면 되지만, host 부분 없이 pathname만 오는 주소인경우(/book/bookList.aspx 같은) WHATWG 방식으로 처리할 수 없다.
WHATWG 방식은 search 부분을 searchParams 라는 특수한 객체로 반환하므로 유용하다. 
search 부분은 보통 주소를 통해 데이터를 전달할 때 사용된다.
search는 ? 로 시작하고 그 뒤에 키=값 형식으로 데이터를 전달한다. 여러 키의 경우 &로 구분한다.
*/
