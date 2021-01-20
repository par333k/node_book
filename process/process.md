# process

* process 객체는 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있고 다양한 속성이 존재한다
* process.version : 설치된 node 버전
* process.arch : 프로세서 아키텍처 정보
* process.platform : 운영체제 플랫폼 정보
* process.pid : 현재 프로세스의 아이디.
* process.uptime() : 프로세스가 시작된 후 흐른 시간. 단위는 초.
* process.execPath : 노드의 경로.
* process.cwd() : 현재 프로세스가 실행되는 위치.
* process.cpuUsage() : 현재 cpu 사용량.

- 이외에도 process.env, process.nextTick, process.exit() 등이 있다.