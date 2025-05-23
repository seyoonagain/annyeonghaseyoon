---
title: WYSIWYG 커스터마이징
date: 2025-01-19
tags: ['Utility', 'Troubleshooting']
---

이번 프로젝트 때 텍스트에디터를 사용해볼 기회가 생겼다!  
처음엔 quill을 쓰려고 했지만 next.js 15버전과의 호환성 때문인지 내가 못하는건지  
quill, quill-react, quill-react-new를 다 시도해 보았지만 커스터마이징에 실패...!  
다른 에디터를 찾던 중 Tiptap을 발견하고 Tiptap으로 다시 시도해보았다!

## 미리보기

Tiptap은 next.js 15버전에서 아래와 같이 아주 잘 작동하였다.  
아이콘은 lucide 라이브러리를 사용했다.  
컬러팔레트까지 커스터마이징이 가능해서 컬러팔레트까지 이번 프로젝트 주요 색상을 이용해 만들었다.  
사진도 잘 들어간다.

![doreumung_text_editor](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlQNzV%2FbtsLRLiXd9y%2FKmgAQtl2iP70ANGcPsPjg0%2Fimg.png)

모바일일 땐 undo와 redo 버튼을 없애고, 헤딩 옵션을 하나의 아이콘으로 합쳐 선택지가 드롭다운처럼 뜨도록 만들었다.

![responsive](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcL7wOd%2FbtsLSmwclNZ%2FTc1ur5mg5GDtK68qCUpeh0%2Fimg.png)

## Tiptap 커스터마이징

### Tiptap 설치

[**Tiptap Editor Docs 참고**](https://tiptap.dev/docs/editor/getting-started/install)

```zsh
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit
```

```zsh
yarn add @tiptap/react @tiptap/pm @tiptap/starter-kit
```

```zsh
pnpm add @tiptap/react @tiptap/pm @tiptap/starter-kit
```

---

### 텍스트 에디터 만들기

나는 Tiptap 관련 로직을 분리시키고자 훅으로 따로 뺐고,  
훅 내부에서 useEditor를 통해 텍스트 에디터를 만들었다.  
이 때 **에디터 내에서 사용할 기능들을 extensions 안에서 정의**할 수 있다.

```ts
const editor = useEditor({
  extensions: [
    StarterKit.configure({
      heading: false,
    }),
    Underline,
    Image,
    Color,
    TextStyle.configure({ mergeNestedSpanStyles: true }),
    Highlight.configure({ multicolor: true }),
    Heading.configure({
      levels: [1, 2, 3],
    }),
    CharacterCount.configure({ limit: LIMIT }),
  ],
  onCreate: ({ editor }) => {
    // 에디터 첫 실행 시 동작
  },
  onUpdate: ({ editor }) => {
    // 에디터에 입력이 있을 때마다 동작
  },
  immediatelyRender: false,
  content: '', // 텍스트 에디터 초기 텍스트 값
});
```

처음 설치할 때 함께 설치한 StarterKit에는 기본적으로 아래의 기능들이 있다.

- `Blockquote`
- `BulletList`
- `CodeBlock`
- `Document`
- `HardBreak`
- `Heading`
- `HorizontalRule`
- `ListItem`
- `OrderedList`
- `Paragraph`
- `Text`
- `Bold`
- `Code`
- `Italic`
- `Strike`
- `Dropcursor`
- `Gapcursor`
- `History`

그 외에 추가 기능을 사용하고자 한다면 extension을 별도로 설치하여 사용할 수 있다.  
StarterKit에 기본적으로 `Heading` 기능이 있었지만 추가 설정이 필요하여 별도로 설치하였다.  
StarterKit에 있는 기능이지만 별도로 설치 후 추가 설정을 하는 경우,
아래와 같이 StarterKit의 해당 기능을 사용하지 않겠다는 코드를 작성해주어야 한다.

```ts
StarterKit.configure({
  heading: false,
});
```

**추가로 설치한 extension들**

- `Heading`: `<h1>` ... `<h6>` 태그 사용을 위한 extension
- `Color`, `Highlight`, `TextStyle`
  - `Color`: 글자 색상
  - `Highlight`: 글자 배경 색상
  - `TextStyle`: span 태그를 이용해 글자 스타일을 적용시킬 수 있게 도와주는 extension
- `Underline`: 밑줄
- `Image`: 사진 추가
- `CharacterCount`: 글자 수 제한

**StarterKit에 있는 것을 그대로 사용한 기능**

- `Bold`
- `Italic`
- `Strike`
- `ListItem`
- `History`

### 텍스트 에디터 렌더링

나는 툴바와 에디터를 별도의 컴포넌트로 만들었고,
두 컴포넌트를 포함하는 상위 컴포넌트에서 `useTiptap` 훅을 호출하여 `editor`를 가져와 툴바와 에디터에 `editor` 객체를 전달하였다.

```ts
import useTiptap from '@/hooks/useTiptap';

const Form = () => {
  const { editor } = useTiptap()

  return (
    <>
      <Toolbar editor={editor} />
      <Tiptap editor={editor} />
    </>
  )
}
```

대략 위와 같은 식으루.  
실제 코드는 다른 코드들이 많아 지저분해서 관련 부분만 적어보았다.

Tiptap 컴포넌트 내에서는 `EditorContent`를 이용하여 실제 텍스트 에디터를 렌더링한다.  
텍스트 에디터의 전체적인 사이즈 및 스타일을 className을 통해 설정해주었다.

```ts
import { EditorContent } from '@tiptap/react';
import { TiptapProps } from '../types';

const Tiptap = ({ editor }: TiptapProps) => {
  return (
    <EditorContent
      editor={editor}
      className="w-full h-[640px] border border-t-0 border-green rounded-b-2xl bg-white overflow-scroll md:h-[768px]"
    />
  );
};

```

## 트러블슈팅

### 태그별 스타일 누락

에디터를 통해 만들어진 HTML을 보면 툴바를 이용해 적용한 태그는 다 적용되어 있지만,  
실제 화면 상 렌더링 된 것에는 스타일이 적용이 안되는 문제가 발생했다.

이는 Tailwind CSS의 기본 reset CSS가 적용되어 생기는 문제였다.

#### Tailwind CSS 주입하기

`configure` 메소드의 `levels` 키를 통해 사용할 Heading 태그의 레벨을 지정하고,
`extend`에서 태그명, 태그 속성 등을 지정할 수 있다.
`class`에 Tailwind CSS 코드를 작성함으로써 Heading 태그의 스타일을 설정할 수 있었다!

```ts
const HEADING_CLASSES: Record<Level, string> = {
  1: 'text-2xl',
  2: 'text-xl',
  3: 'text-lg',
};
```

```ts
Heading.configure({
        levels: [1, 2, 3],
      }).extend({
        renderHTML({ node }) {
          const level: Level = node.attrs.level;
          const baseClass = 'font-bold';
          const sizeClass = HEADING_CLASSES[level] || 'text-base';
          return [`h${level}`, { class: `${baseClass} ${sizeClass}` }, 0];
        },
      }),
```

#### globals.css에서 스타일 설정하기

`<ul>`, `<ol>`, `<li>` 태그의 경우는 reset된 스타일을 globals.css에서 아래와 같이 다시 설정해주었다.

```css
ol > li {
  @apply list-decimal pl-2;
}

ul > li {
  @apply list-disc pl-2;
}

ol,
ul {
  @apply pl-5;
}
```

### 작은 입력창

분명 EditorContent에서 높이를 지정해주었음에도,  
텍스트 에디터에 포커싱 되었을 때 다음과 같이 못생긴 아웃라인이 겨우 한 줄에 해당하는 옹졸한 높이의 입력창을 가지고 있음을 보여준다.

![short input height](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbXBqRg%2FbtsLSM8UUEI%2Ffdfcn82T4iRG0HRYDc3gJ0%2Fimg.png)

#### editorProps에서 스타일 조정

위의 문제를 해결하기 위해, `useEditor`에 전달하는 객체에서 아래와 같은 옵션을 추가한다.

```ts
    editorProps: {
      attributes: {
        class: 'h-full p-4 prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl',
      },
    },
```

`h-full`을 적용시킴으로써 아래처럼 아웃라인의 크기가 달라진 걸 알 수 있다.

![input with bigger height](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpVXno%2FbtsLS8qqczs%2FRHyrPjfiieklxuI8YTxnmk%2Fimg.png)

### 못생긴 아웃라인

`outline-0`, `outline-none`을 아무리 적용해도 사라지지 않는 아웃라인...  
내부적으로 에디터에 적용된 스타일이 있는 듯하다.

#### ProseMirror 스타일 설정

```ts
.ProseMirror-focused {
  @apply outline-none;
}
```

위와 같이 globals.css 파일 내에서 해당 클래스 네임에 해당하는 스타일을 다시 설정함으로써 아웃라인을 없애고 깔끔한 에디터를 얻을 수 있었다!

## 최종 코드

### useTiptap.ts

```ts
const HEADING_CLASSES: Record<Level, string> = {
  1: 'text-2xl',
  2: 'text-xl',
  3: 'text-lg',
};

const editor = useEditor({
  extensions: [
    StarterKit.configure({
      heading: false,
    }),
    Underline,
    Image,
    Color,
    TextStyle.configure({ mergeNestedSpanStyles: true }),
    Highlight.configure({ multicolor: true }),
    Heading.configure({
      levels: [1, 2, 3],
    }).extend({
      renderHTML({ node }) {
        const level: Level = node.attrs.level;
        const baseClass = 'font-bold';
        const sizeClass = HEADING_CLASSES[level] || 'text-base';
        return [`h${level}`, { class: `${baseClass} ${sizeClass}` }, 0];
      },
    }),
    CharacterCount.configure({ limit: LIMIT }),
  ],
  editorProps: {
    attributes: {
      class: 'h-full p-4 prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl',
    },
  },
  onCreate: ({ editor }) => {
    // 에디터 실행 시 동작
  },
  onUpdate: ({ editor }) => {
    // 에디터에 입력이 있을 때마다 동작
  },
  immediatelyRender: false,
  content: '', // 텍스트 에디터 초기 텍스트 값
});
```

### globals.css

```css
.ProseMirror-focused {
  @apply outline-none;
}

ol > li {
  @apply list-decimal pl-2;
}

ul > li {
  @apply list-disc pl-2;
}

ol,
ul {
  @apply pl-5;
}
```
