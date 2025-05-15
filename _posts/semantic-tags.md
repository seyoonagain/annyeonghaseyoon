---
title: 시맨틱 태그
date: 2024-08-31
tags: ['HTML']
---

## Semantic HTML이란?

**Semantic의 사전적 정의**  
relating to meaning in language or logic  
의미와 관련된

**Semantic HTML tags**은 content이 담고 있는 의미/역할을 직관적으로 나타내는 HTML tag를 의미한다.  
Semantic HTML tags의 이름만으로도 해당 tags이 감싸고 있는 content의 구조적 역할을 파악할 수 있어, 페이지에 대한 이해도를 높일 수 있다.

## Semantic HTML tags의 이점

### 1. 접근 용이성

Screen Reader에 의존하는 사용자들, 시각 장애가 있는 사용자들, 또는 다양한 장치에 의존하는 사용자들이 페이지의 구조와 내용을 더 정확하게 이해할 수 있게 도움을 준다.

### 2. 검색 엔진 최적화

Semantic HTML tags는 해당 태그의 content의 역할을 명시하고 있어, 각각의 content의 중요도를 쉽게 파악할 수 있고, 검색 엔진이 content에 대한 이해를 빠르게 할 수 있게 된다.  
그 결과, 검색 키워드와 연관성이 높은 내용을 쉽고 빠르게 찾아 사용자에게 적절한 결과를 보여줌으로써 해당 페이지에 더 많은 트래픽을 유도할 수 있다.

### 3. 코드 가독성 및 유지보수성 향상

타인의 코드라도 각각 content의 역할과 맥락을 쉽게 파악할 수 있고, 그로 인해 유지보수가 쉬워진다.

아래 그림을 보면 Semantic HTML tags의 이점을 한 눈에 파악할 수 있다.

## before & after Semantic HTML

![before-and-after-semantic](https://gist.github.com/user-attachments/assets/ea3b835b-793b-4029-be41-25aa71171961)

## Semantic HTML tags 사용 전략

- semantic tags의 본질에 맞게 문서의 구조와 의미에 맞게 사용할 것
- semantic tags의 본래 목적이 아닌 스타일링 때문에 사용하지 말 것
- 명확한 순서와 상하관계를 구성할 것
- 타겟 키워드를 내용에 적절히 사용할 것

## Semantic Tags의 종류와 역할

- `<header>`: 로고, 사이트 제목, 네비게이션 링크 등을 포함한다.
- `<h1>`: 주제목을 나타낸다. 페이지 당 하나만 사용한다.
- `<h2>`~`<h6>`: 부제목들을 중요도에 따라 구분하여 사용한다.
- `<p>`: 텍스트로 구성된 한 문단을 포함한다.
- `<nav>`: 네비게이션 링크의 그룹으로, 메인 메뉴, 사이드 메뉴, footer 내 링크들을 포함한다.
- `<main>`: 문서의 주요 content을 포함한다.  
  e.g. 블로그 글, 기사, 제품 설명, ...
- `<article>`: 독립적 배포 및 재사용이 가능한 content을 포함한다.
- `<section>`: `<article>` 보단 덜 독립적이며 세분화된 주제를 기준으로 content를 그룹화한다.  
  e.g. 제품 설명 페이지 내의 제품 특징, 사용법, 고객 리뷰, ...
- `<aside>`: 문서의 메인 content와 간접적으로 관련되어 있는, 사이드바에 위치하는 정보를 포함한다.  
  e.g. 블로그 글의 관련 글 몰록, 광고 배너, ...
- `<footer>`: 페이지 또는 section의 바닥글을 정의한다.  
  e.g. 저작권 정보, 연락처 저보, 약관 링크, 소셜 미디어 들
- `<figure>`: 삽화, 사진, 코드 블록 등 독립적인 content를 포함한다.  
  e.g. 이미지나 다이어그램
- `<figcaption>`: `<figure>`에 대한 설명을 제공한다.
- `<time>`: 날짜와 시간을 나타내며, 기계가 읽을 수 있는 형식으로 시간을 제공한다.
- `<address>`: 이메일 주소, 전화번호, 주소 등을 포함한다.
- `<details>`: 필요할 때 숨기거나 확장할 수 있는 추가 정보를 포함한다.  
  e.g. FAQ 페이지에서 질문을 클릭하면 내용이나 답변이 확장되는 기능 구현
- `<summary>`: `<details>` 내부에서 사용되며, 추가 정보를 보기 위한 요약된 제목 역할을 한다.
- `<blockquote>`: 인용구를 포함하며, block-level element를 만든다.
- `<cite>`: 참고 자료의 제목을 포함한다.
- `<kbd>`: 키보드 키를 나타낸다.
- `<var>`: 정수를 가리킨다.
- `<abbr>`: 약어/줄임말을 나타낸다.

---

참고 사이트

[https://www.semrush.com/blog/semantic-html5-guide/](https://www.semrush.com/blog/semantic-html5-guide/)  
[https://medium.com/@odunzechidubem73/html-semantics-explained-1f09f2ef2c94](https://medium.com/@odunzechidubem73/html-semantics-explained-1f09f2ef2c94)
