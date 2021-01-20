# 자주 발생하는 Node.js 에러 
### 자바스크립트 문법 관련 에러는 포함하지 않음

* node: command not found: 노드를 설치했지만 이 에러가 발생하는 경우는 환경 변수가 제대로 설정되지 않은 것이다. 환경 변수에는 노드가
설치된 경로가 포함되어야 한다.
  
* ReferenceError: 모듈 is not defined: 모듈을 require 했는지 확인합니다.

* Error: Cannot find module 모듈명: 해당 모듈을 require 했지만 설치하지 않았습니다. npm i 명령어로 설치해야 한다.

* Error: Can't set headers after they are sent: 요청에 대한 응답을 보낼 때 응답을 두 번 이상 보냈습니다. 요청에 대한 응답은 한 번만 보내야 합니다.
응답을 보내는 메서드를 두 번 이상 사용하지 않았는지 체크.
  
* FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory : 코드를 실행 할 때 메모리가 부족하여
스크립트가 정상 작동하지 않는 경우, 코드가 잘못되었을 확률이 일반적으로 높다. 코드가 정상일 경우 노드의 기본 힙 메모리인 1.5G 를 넘어서 발생하는
  경우가 많다. node --max-old-space-size-4096 같은 명령어를 통해 메모리를 늘릴 수 있다. 원하는 용량을 적으면 된다.
  
* UnhandledPromiseRejectionWarning: Unhandled promise rejection: 프로미스 사용시 catch 메서드를 븥이지 않으면 발생한다. 항상 
catch를 붙여 에러가 나는 상황에 대비해야함.
  
* EADDRINUSE 포트 번호: 해당 포트 번호에 이미 다른 프로세스가 연결되어 있다. 그 프로세스는 노드 프로세스일수도 있고
다른 프로그램일수도 있다. 그 프로세스를 종료하거나 다른 포트번호를 사용해야 함.
  
* EACCES 또는 EPERM: 노드가 작업을 수행하는 데 권한이 충분하지 않다. 파일/폴더 수정, 삭제, 생성 권한을 확인해 보는것이 좋다.

* EJSONPARSE: package.json 등의 JSON 파일에 문법 오류가 있을 때 발생한다. 자바스크립트 객체와는 형식이 조금 다르니 쉼표같은게 빠지거나 추가되었는지 확인.

* ECONNREFUSED: 요청을 보냈으나 연결이 성립하지 않을 때 발생한다. 요청을 받는 서버의 주소가 올바른지, 꺼져 있지는 않은지 확인해 봐야 한다.

* ETARGET: package.json에 기록한 패키지 버전이 존재하지 않을 때 발생한다. 해당 버전이 존재하는지 확인한다.

* ETIMEOUT: 요청을 보냈으나 응답이 일정 시간 내에 오지 않을 때 발생한다. 역시 요청을 받는 서버의 상태를 점검해봐야 한다.

* ENOENT: no such file or directory: 지정한 폴더나 파일이 존재하지 않는 경우.

