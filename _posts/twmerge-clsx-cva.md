---
title: Tailwind 유틸리티
date: 2024-12-14
tags: ['Utility', 'Tailwind CSS']
---

## twMerge

Tailwind를 사용할 때 *기본적으로 정의된 클래스*와 *prop으로 전달받은 클래스*가 **중복**될 경우,  
Tailwind의 CSS 클래스는 후순위에 있는 클래스가 우선 적용된다.  
하지만 클래스 문자열을 단순히 병합하면, 코드가 복잡해지거나 실수로 인해 **의도한 스타일이 제대로 적용되지 않을 수 있다**.

이를 해결하기 위해 tailwind-merge와 같은 라이브러리를 사용한다.  
tailwind-merge는 중복된 Tailwind 클래스 중에서 **우선순위에 따라 올바른 클래스를 자동으로 선택**해 주며,  
이를 통해 **prop으로 전달된 클래스**가 기본 클래스를 **override**할 수 있도록 보장한다.

### twMerge 설치

```zsh
npm install tailwind-merge
```

```zsh
yarn add tailwind-merge
```

```zsh
pnpm add tailwind-merge
```

### twMerge 코드 예제

```ts
import { twMerge } from 'tailwind-merge';

const Button = ({ className }) => {
  const baseClasses = "bg-blue-500 text-white";

  return <button className={twMerge(baseClasses, className)}>Click Me</button>;
};

// 사용 예시
<Button className="bg-red-500" />
```

위 코드에서 className으로 전달된 `bg-red-500`이 기본 클래스의 `bg-blue-500`을 **override**하여 버튼의 배경색이 빨간색으로 설정된다.

---

## clsx

`clsx`는 전달된 매개변수 중 **truthy**한 값을 기준으로 CSS 클래스 문자열을 생성해 반환하는 유틸리티 함수이다.

### clsx 설치

```zsh
npm install clsx
```

```zsh
yarn add clsx
```

```zsh
pnpm add clsx
```

### 동작 방식

- **매개변수 타입**
  - 문자열, 숫자 등의 원시타입
    - falsy한 값: `0`, `-0`, `0n`, `false`, `''`, `null`, `undefined`, `NaN`
    - `boolean`이 단독으로 쓰인 경우 무시됨  
      `false`는 물론, `true`여도 반환되지 않음  
      `true && 'bar'`처럼 `&&` 연산자를 사용하여 반환할 문자열을 전달할 수 있음
  - 객체
    - `value`의 값이 truthy한 경우 해당 `key`를 반환
  - 배열
    - 중첩 배열을 포함하여 **재귀적으로 펼쳐서** 처리
- **리턴 타입**
  - `string` (truthy한 값만 포함한 문자열)
  - 모든 매개변수가 falsy한 경우, 빈 문자열 `''`을 반환
- **작동 과정**
  1.  매개변수를 받아와 내부적으로 **spread**하여 값을 순회
  2.  각 값이 **truthy**한지 검사
  3.  **truthy한 값만** 골라 최종적으로 하나의 `string`으로 병합하여 반환

### clsx 코드 예제

```ts
import clsx from 'clsx';
// or
import { clsx } from 'clsx';

// Strings (variadic)
clsx('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
clsx({ foo: true, bar: false, baz: isTrue() });
//=> 'foo baz'

// Objects (variadic)
clsx({ foo: true }, { bar: false }, null, { '--foobar': 'hello' });
//=> 'foo --foobar'

// Arrays
clsx(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
clsx('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya');
//=> 'foo bar hello world cya'
```

---

## cva

_Class Variance Authority_

조건부 스타일링을 구조적으로 처리하기 위해 만들어진 CSS 클래스 관리 유틸리티 라이브러리로,  
Tailwind CSS와 같이 유틸리티 클래스 기반의 스타일링을 사용할 때 유용하다.

cva는 컴포넌트의 여러 가지 형태와 상태를 정의하고, 이를 기반으로 동적인 CSS 클래스를 생성한다.

### cva 설치

```zsh
npm install class-variance-authority
```

```zsh
yarn add class-variance-authority
```

```zsh
pnpm add class-variance-authority
```

### API 설명

- `cva(baseClasses, options)`
  - `baseClasses`: 항상 적용되는 기본 클래스
  - `options`: `variants`, `compoundedVariants` 및 `defaultVariants`을 정의하는 객체
    - `varaints`: 상태나 변형에 따라 추가될 CSS 클래스 정의
    - `compoundedVariants`: 개별 변형뿐 아니라 여러 변형의 상태가 특정 조건을 만족할 때만 적용할 CSS 클래스 정의
    - `defaultVariants`: 기본적으로 적용될 변형을 지정
  - 리턴: `options` 객체를 전달 받아 조건에 맞는 CSS 클래스 반환

`const button = cva(baseClasses, options)`

위와 같은 형태로 cva를 정의하며, `button(options)` 형태로 호출하여 사용한다.  
즉, `cva`가 할당된 변수 `button`은 함수처럼 사용되며,  
해당 함수에 전달되는 매개변수는 `cva`의 두 번째 매개변수인 `options`의 속성인 `variants`와 매칭되어 CSS 클래스가 특정된다.

### cva 코드 예제

```ts
// components/button.ts
import { cva } from 'class-variance-authority';

const button = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
      class: 'uppercase',
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

button();
// => "font-semibold border rounded bg-blue-500 text-white border-transparent hover:bg-blue-600 text-base py-2 px-4 uppercase"

button({ intent: 'secondary', size: 'small' });
// => "font-semibold border rounded bg-white text-gray-800 border-gray-400 hover:bg-gray-100 text-sm py-1 px-2"
```

- `button`에 아무런 매개변수가 전달되지 않으면,  
  `defaultVariants`에 설정된 기본 상태 및 형태와 `variants`와 매칭된 스타일이 반환된다.
- `button`에 전달된 매개변수 `{ intent: "secondary", size: "small" }`는  
  각각 `variants.intent.secondary`와 `variants.size.small`에 해당하는 스타일을 가리킨다.

### 주의사항

- **조합 조건의 충돌**  
  여러 `compoundedVariants`가 동시에 만족하는 경우,  
  나중에 정의된 클래스가 덮어씌워질 수 있으므로, 조건을 신중히 작성해야 한다.

---

## clsx vs. cva

### clsx 예제

```ts
import clsx from 'clsx';

function Button({ isPrimary, isDisabled }) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded', // 기본 스타일
        isPrimary && 'bg-blue-500 text-white', // 조건부 스타일
        isDisabled && 'opacity-50 cursor-not-allowed' // 비활성화 스타일
      )}
    >
      Click Me
    </button>
  );
}
```

- `isPrimary`가 `true`이면 `bg-blue-500 text-white`가 추가
- `isDisabled`가 `true`이면 `opacity-50 cursor-not-allowed`가 추가

---

### cva 예제

```ts
import { cva } from 'class-variance-authority';

const buttonStyles = cva(
  'px-4 py-2 rounded', // 기본 스타일
  {
    variants: {
      intent: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-500 text-black',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      intent: 'primary',
      disabled: false,
    },
  }
);

function Button({ intent, disabled }) {
  return <button className={buttonStyles({ intent, disabled })}>Click Me</button>;
}
```

- `intent`와 `disabled` 변형을 정의하여 구조화된 스타일 관리 가능
- `defaultVariants`로 기본 상태를 지정
- `buttonStyles` 호출 시 객체 형태로 변형을 전달하여 동적으로 클래스 적용

---

### **clsx와 cva 비교**

- **clsx**는 단순한 조건부 클래스 병합에 적합하며, 유연성과 간결함이 강점
- **cva**는 컴포넌트 스타일을 구조적으로 관리하고 변형을 쉽게 적용할 수 있어 더 복잡한 스타일링에 유리함
