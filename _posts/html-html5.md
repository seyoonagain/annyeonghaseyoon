---
title: HTML vs. HTML5
date: 2024-09-03
tags: ['HTML']
---

HTML과 HTML5는 모두 HyperText Markup Language로, 웹 페이지 및 웹 어플리케이션을 만드는 데 사용된다.  
HTML5는 2014년에 출시된 가장 최신 버전의 HTML이다.

## HTML5의 특징

### 1. 새로운 시맨틱 태그 도입

문서의 구조와 의미를 더 잘 표현할 수 있는 새로운 시맨틱 요소가 도입되었다.

- `<header>`
- `<footer>`
- `<article>`
- `<section>`
- `<aside>`
- `<nav>`
- `<main>`
- `<figure>`
- `<figcaption>`
- `<mark>`
- `<summary>`
- `<details>`

### 2. 멀티미디어 지원

별도의 플러그인 없이 오디오 및 비디오 콘텐츠를 `<audio>`, `<video>` elements을 통해 웹 페이지에 직접 포함할 수 있다.

### 3. 그래픽 요소 및 새로운 API

2D 그래픽을 그릴 수 있는 `<canvas>` element와 다양한 드로잉 API이 포함되었다.  
또한 SVG와 같은 벡터 이미지를 HTML 문서에 통합할 수 있다.

### 4. 새로운 입력 유형과 속성

- `email`, `date`, `range` 등과 같은 type으로 데이터의 유효성을 쉽게 검증할 수 있다.
- `required`, `placeholder`, `autofocus`, `pattern`과 같은 새로운 attributes가 추가되었다.
- input type이 `number` 또는 `date`인 경우, `min`, `max`, `step` 속성을 이용하여 데이터 값의 범위 및 간격을 설정할 수 있다.

### 5. 오프라인 저장소 지원

- 오프라인에서 작동할 수 있도록 application cache를 지원하며, localStorage와 sessionStorage API를 제공한다.

### 6. JavaScript API

- Geolocation API  
  사용자의 위치 정보 파악 가능
- Web Workers  
  백그라운드 스레드 활성화로 메인 스레드 성능 향상
- WebSocket  
  서버와의 양방향 통신 지원
- Drag and Drop API  
  드래그 앤 드롭 기능으로 사용자가 요소를 이동 및 복사할 수 있는 API

### 7. 기타 구조적 간소화

- `<doctype>` 선언이 `<!DOCTYPE html>`로 간소화되었다.
- meta 태그를 통한 문서 인코딩 방식을 간편하게 지정할 수 있다.

## HTML과 달라진 점

### 1. 사라진 요소들

- `<isindex>`
- `<noframes>`
- `<acronym>`
- `<applet>`
- `<basefont>`
- `<dir>`
- `<font>`
- `<frame>`
- `<frameset>`
- `<big>`
- `<center>`
- `<strike>`
- `<tt>`

### 2. 새로운 form의 입력 유형

- `date`
- `time`
- `email`
- `number`
- `range`
- `tel`
- `url`
- `search`
- `color`
- `datalist`

### 3. 새로운 요소

- `<video>`
- `<audio>`
- `<nav>`
- `<aside>`
- `<progress>`
- `<canvas>`
- `<section>`
- `<meter>`
- `<time>`
- `<source>`
- `<output>`
- `<details>`
- `<dialog>`

### 4. 새로운 속성

#### 전역 속성

- `hidden`
- `role`
- `spellcheck`
- `translate`

#### 그 외 속성

- `async`, `defer`: `<script>` 태그에 사용
- `manifest`
- `sandbox`, `srcdoc`: `<iframe>` 태그에 사용
- `reversed`: `<ol>` 태그에 사용
- `autoplay`, `controls`, `loop`, `muted`: `<video>` 및 `<audio>` 요소에 사용
