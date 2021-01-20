const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];

const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);

/*
* from(문자열): 문자열을 버퍼로 바꿀 수 있습니다. length 속성은 버퍼의 크기를 알립니다. 바이트 단위입니다.
* toString(버퍼): 버퍼를 다시 문자열로 바꿀 수 있습니다. 이때 base64나 hex를 인수로 넣으면 해당 인코딩으로도 변환 가능합니다.
* concat(배열): 배열 안에 든 버퍼들을 하나로 합칩니다.
* alloc(바이트): 빈 버퍼를 생성합니다. 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성됩니다.
 */

// 버퍼는 전송할 데이터의 메모리 양 만큼을 확보해야 하기 때문에 여럿이 접속하는 서버에는 메모리 문제가 발생할 수 있다
// 따라서 스트림을 통해 메모리 점유율을 낮춰야한다. 스트림은 버퍼의 크기를 작게 만든 후 여러번으로 나눠서 데이터를 전송한다.
// 파일을 읽는 스트림 메서드로는 createReadStream이 있다.
