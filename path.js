const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('----------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
    dir: 'C:\\users\\parkjinwoong',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\parkjinwoong\\\path.js'));
console.log('------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('-----------------------------');
console.log('path.relative():', path.relative('c:\\users\\parkjinwoong\\path.js', 'C:\\'));
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/parkjinwoong'));
console.log('path:resolve():', path.resolve(__dirname, '..', 'users', '.', '/parkjinwoong'));

/*
path.sep: 경로의 구분자. 윈도우는 \, POSIX(리눅스, 유닉스계열)은 /
path.delimiter: 환경 변수의 구분자. process.env.PATH를 입력시 여러개의 경로가 이 구분자로 되어있다. 윈도우는 ; 이고 POSIX는 : 이다
path.dirname(경로): 파일이 위치한 폴더 경로
path.extname(경로): 파일의 확장자를 보여준다
path.basename(경로, 확장자): 파일의 이름(확장자 포함)을 표시한다. 파일의 이름만 표시하고 싶다면 basename의 두 번째 인수로 파일의 확장자를 넣으면 된다.
path.parse(경로): 파일 경로를 root, dir, base, ext, name 으로 분리한다.
path.format(객체): path.parse()한 객체를 파일 경로로 합칩니다.
path.normalize(경로): /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환합니다.
path.isAbsolute(경로): 파일의 경로가 절대경로인지 상대경로인지를 true나 false로 알립니다.
path.relative(기준경로, 비교경로): 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알립닌다.
path.join(경로, ...): 여러 인수를 넣으면 하나의 경로로 합칩니다. 상대경로인 ..(부모 디렉터리)과 .(현 위치)도 알아서 처리합니다.
path.resolve(경로, ...): path.join()과 비슷하지만 차이가 있습니다.
path.join은 /를 만나면 상대경로로 처리하고, path.resolve는 절대경로로 인식합니다.
EX) path.join('/a','/b','c'); 결과 : /a/b/c/ || path.resolve('/a,'/b','c'); 결과: /b/c

\\를 사용하는 경우와 \ 를 사용하는 경우.
자바스크립트에서 \는 경로 외에도 줄바꿈 등에 쓴다(\n) 
따라서 경로표기과정에서 의도치않은 오류가 발생할 수 있기 때문에 윈도우 환경에서는 특히 \\로 처리해야한다.
path 모듈은 위와 같은 문제를 알아서 처리해준다는 점에서 좋다.

상대경로는 현재 파일이 기준이 되며 같은 경로면 점 하나, 상위 경로라면 점 두개를 사용해 표현한다.
절대경로는 루트 폴더나 노드 프로세스가 실행되는 위치가 기준이 된다.

윈도우, POSIX에서 각각의 스타일 경로를 이용하고 싶을 경우
path.posix.sep 이나 path.posix.join(), path.win32.sep, path.win32.join()과 같이 사용하면 된다.

노드는 require.main 파일을 기준으로 상대 경로를 인식한다. 따라서 require.main과는 다른 디렉터리 파일이 상대 경로를 갖고 있다면 예상과 다르게 동작할 수 있다.
이 문제는 path모듈을 통해 해결할 수 있다.

*/