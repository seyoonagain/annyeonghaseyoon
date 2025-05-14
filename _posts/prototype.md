---
title: 프로토타입
date: 2024-09-23
tags: ['JavaScript']
---

## Prototype이란?

**Prototype**은 사전적으로 **원형, 표준**을 의미하며,  
'_복제를 위한 기본 틀_'이라고 정의할 수 있다.

자바스크립트에서는 '_상속받을 기본 속성과 메소드_'를 제공하는 개념으로 이해할 수 있다.

## 프로토타입 체인이란?

한 객체의 메소드나 속성을 찾을 때, 먼저 해당 객체 내에서 찾고 없으면 그 객체의 프로토타입에서 찾는다.  
프로토타입에 없으면 또 상위 프로토타입에서 찾는 과정이 계속되며,  
이를 **프로토타입 체인**이라고 한다.

### 오버라이딩(Overriding)

객체에서 프로토타입의 속성을 재정의할 수 있다.  
재정의된 속성은 프로토타입 체인을 따라가지 않는다.

```js
class Car {
  constructor(company, model) {
    this.company = company;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.model}은(는) 전기 모터로 작동합니다.`);
  }
}

const myCar = new Car('Hyundai', 'Kona');
myCar.startEngine = function () {
  console.log(`${this.model}은(는) 내연기관 차입니다.`);
};

myCar.startEngine(); // Kona은(는) 내연기관 차입니다.
```

위의 예시에서 클래스 내에 정의된 `startEngine()`이 `myCar.startEngine`을 통해 재정의되면서,  
해당 함수 실행 시 재정의된 함수가 실행됨을 알 수 있다.

## Prototype 사용 방식

### 1. 생성자 함수

```js
function Person(name) {
  this.name = name;
  // 생성자 함수 내에서 메소드 정의
  this.eat = function () {
    console.log('😋 yummy');
  };
}

// prototype에 메소드 정의
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const seyoon = new Person('Seyoon');
const meghan = new Person('Meghan');

// 생성자 함수 내 메소드는 인스턴스마다 고유하게 생성되어 인스턴스끼리 공유되지 않는다.
console.log(seyoon.eat === meghan.eat); // false
// 프로토타입에 정의된 메소드는 인스턴스끼리 공유한다.
console.log(seyoon.sayHello === meghan.sayHello); // true
```

생성자 함수를 통해 프로토타입을 만들 때,  
메소드는 함수 내에 포함시키지 않고,  
prototype에 접근하여 메소드를 생성한다.

생성자 함수에 포함 된 메소드는 인스턴스 생성할 때마다 만들어지지만,  
prototype에 접근하여 메소드를 생성하면,  
모든 인스턴스가 프로토타입에 있는 메소드를 공유하게 되어,  
메모리 사용에 효율적이다.

위의 예시에서 함수 내에서 작성된 메소드 `eat`은 인스턴스끼리 서로 다름을 알 수 있고,  
prototype을 이용해 작성된 메소드 `sayHello`는 두 인스턴스가 공유함을 알 수 있다.

### 2. Object.create()

기존 객체를 프로토타입으로 설정하여 새로운 객체를 만든다.

```js
const animal = {
  eat: function () {
    console.log('eating 😋');
  },
};

const cat = Object.create(animal);
cat.sleep = function () {
  console.log('sleeping...😴');
};

const dog = Object.create(animal);
dog.sleep = function () {
  console.log('sleeping...😴');
};

// 기존 객체에서 정의한 메소드는 인스턴스끼리 공유한다.
console.log(cat.eat === dog.eat); // true
// 인스턴스에 정의한 메소드는 이름이 같아도 서로 공유되지 않는다.
console.log(cat.sleep === dog.sleep); // false
```

객체를 만들고 해당 객체를 프로토타입으로 삼는 인스턴스를 만들 수 있다.  
이 때 객체 내 메소드는 인스턴스끼리 공유된다.

### 3. ES6 Class

생성자 함수와 prototype방식을 간소화한 문법으로,  
생성자 함수인 `constructor()`을 포함하고 있으며,  
클래스 안에 정의된 메소드는 자동으로 프로토타입 레벨에 추가된다.

```js
class Person {
  constructor(name) {
    this.name = name;
    // 생성자 함수 내 메소드 정의
    this.sleep = function () {
      console.log('sleeping...😴');
    };
  }

  // 생성자 함수 바깥, 클래스 내 메소드 정의
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const seyoon = new Person('seyoon');
seyoon.eat = function () {
  console.log('eating! 😋');
};
const meghan = new Person('meghan');
meghan.eat = function () {
  console.log('eating! 😋');
};

// 생성자 함수 내 정의된 메소드는 인스턴스마다 고유하게 생성되므로 서로 공유하지 않는다.
console.log(seyoon.sleep === meghan.sleep); // false
// 클래스 내에서 정의한 메소드는 인스턴스끼리 서로 공유한다.
console.log(seyoon.sayHello === meghan.sayHello); // true
// 인스턴스에 접근하여 만든 메소드는 인스턴스끼리 서로 공유하지 않는다.
console.log(seyoon.eat === meghan.eat); // false
```
