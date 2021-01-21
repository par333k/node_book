### npm

#### npm은 node 의존성 패키지 매니저

* package.json을 통해 의존성과 명령어 스크립트 관리
* package-lock.json은 package.json이 변경되었을 때
자동으로 생성된다. 파일 생성 시점에서 정확한 의존성 정보가 기록된다.
* package-lock.json 이 필요한 이유는 노드 패키지의 버전 변화에 따른 호환성 문제에 대한 최소한의 방어책이기 때문
* npm install, npm install -g(전체설치), npm install -D (개발버전 설치) 등의 명령어가 있다
* 터미널 명령어를 쓰고싶으나 global 설치를 피하고 싶다면 package.json의 devDependencies 속성에 기록한 후 npx 패키지명 node_modules 형태로 설치할 수 있다.
* 노드 패키지들의 버전은 SemVer 방식의 버전 넘버링을 따른다
* SemVer는 Semantic Versioning(유의적 버전)의 약어로, 버전을 구성하는 세 자리의 숫자가 모두 의미를 지니고 있다는 뜻이다.
* 버전의 첫 번째 자리는 major로, 이게 바뀌면 하위호환을 보장하지 않을 정도로 변경사항이 크다는 것이다.
* 두 번째 자리는 minor 버전으로, 하위호환을 보장하는 수준의 기능 업데이트를 진행했을때 쓰인다
* 세 번째 자리는 patch 버전으로, 기존 기능에 대한 디버깅에 관련되어 있다.
* 새 버전을 배포한 후에는 내용을 절대 임의로 수정해서는 안되며, 수정이 진행되면 해당 내역에 따라 버전의 변경이 필수적이다.
* ^,~,>,< 같은 문자는 버전에는 포함되지 않지만 설치하거나 업데이트할 때 어떤 버전을 설치해야 하는지 알리는 역할이다.
* 가령 npm i express@^1.1.1 이라면 1.1.1이상부터 2.0.0 미만버전까지 설치된다. 1.x.x 로 표현 가능하다
* npm i express@~1.1.1이라면 1.1.1 이상부터 1.2.0 미만 버전까지 설치된다. 1.1.x 로 표현 가능하다.
* '>,<,>=,<=,=' 는 부등호 의미대로 사용된다.
* @next 를 사용하면 가장 최근 배포판을, @lastest 의 경우 안정성이 보장된 최신 버전의 패키지를 설치한다
* npm outdated 명령어로 업데이트 가능한 패키지를 확인한다. Current 버전이 Wanted 버전보다 낮을 경우 보통 업데이트를 권장한다.
* 해당 패키지의 최신버전이 package.json에 적힌 버전 범위와 다르다면 설치되지 않는다
* npm uninstall 패키지명은 해당 패키지를 제거한다
* npm search 검색어로 npm 패키지 검색이 가능하다.
* npm info 패키지명은 패키지의 세부 정도를 나타낸다.
* npm adduser 는 npm 로그인을 위한 명령어다. 배포할 때 필요하다.
* npm whoami는 로그인한 사용자를 알리며, 로그인 된 상태가 아니라면 에러가 발생한다.
* npm logout은 npm adduser로 로그인한 계정을 로그아웃할 때 사용한다.
* npm version 버전 은 package.json의 버전을 올린다
* npm deprecate 패키지명 버전 메시지는 해당 패키지를 설치할 때 경고 메세지를 띄우게 할 수 있으며, 자신의 패키지에만 이 명령어의 적용이 가능하다.
* npm publish는 자신이 만든 패키지를 배포할 때 사용한다
* npm unpublish는 배포한 패키지를 제거할 때 사용한다.
* npm ci는 package.json 대신 package-lock.json 기반하여 패키지를 설치한다
* 이외의 명령어는 https://docs.npmjs.com 참고