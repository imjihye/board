# Board by React

## 모듈 설치
```
npm install 
```
- express
- react
- react-dom
- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- reat-hot-loader
- webpack
- webpack-dev-server

## babel 컴파일
es5문법으로 작성된 코드를 es5문법으로 컴파일한다.
``` 
babel sever -d build
```

## node 서버 띄우기
```
node build/main.js
```

## 테스트
```
http://localhost:3000/
```

## npm으로 한방에 실행하기 (npm scripts)
```
npm run clean
npm run build
npm run start or npm run development
```

## 환경에 다라 실행하기
- 프러덕션 환경 : npm run start (http://localhost:3000)
- 개발 환경 : npm run development (http://localhost:8123)

참고) 개발환경은 react-hot-loader를 사용하여 변경사항에 실시간으로 적용되도록 했다.


## Directory
```
├── .babelrc                    # babel 설정파일
├── package.json                # npm 설정파일
├── webpack.config.js           # webpack 설정파일 
├── webpack.dev.config.js       # webpack-dev-server 설정파일
├── build                       # babel로 컴파일된 서버 빌드 디렉토리
│   ├── main.js                 # babel로 컴파일된 서버 메인 스크립트
│   └── routes.js               # babel로 컴파일된 서버 라우드 디렉토리
│         └── data.js           # babel로 컴파일된 서버 라우드 test 스크립트
├── server                      # 서버 디렉토리
│   ├── main.js                 # 서버 메인 스크립트
│   └── routes.js               # 서버 라우트 디렉토리
│         └── data.js           # 서버 라우트 test 스크립트
├── src                         # 클라이언트 디렉토리
│   ├── static                  # 클라이언트 static 디렉토리
│   │   └── css                 # 클라이언트 css 디렉토리
│   │       ├── base.css        # 클라이언트 base css
│   │       └── style.css       # 클라이언트 style css
│   ├── board.js                # 클라이언트 컴포넌트
│   └── index.js                # 클라이언트 메인 스크립트
└── dist                        # webpack으로 컴파일된 클라이언트 빌드 디렉토리
    ├── bundle.js               # webpack으로 컴파일된 클라이언트 메인 스크립트
    └── index.html              # 메인 페이지
```