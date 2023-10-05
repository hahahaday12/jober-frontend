### 리액트 불변성과 IMMER

리액트에서는 state의 불변성을 지켜야 한다.

```jsx
import { useState } from 'react';

export default function App() {
  const [cat, setCat] = useState({
    name: 'howoo',
    age: 6,
  });

  const handleChangeCatName = () => {
    cat.name = 'mango';
    setCat(cat);
  };
  console.log(cat); //{ name: 'mango', age: 6 }

  return (
    <div style={{ textAlign: 'center' }}>
      <div>고양이 이름 : {cat.name}</div>
      <button onClick={handleChangeCatName}>이름변경</button>
    </div>
  );
}
```

버튼을 누르면 console.log(cat)을 통해 실재 cat.name은 변경이 된것을 확인할 수 있지만 `cat`의 참조값은 그대로이기 때문에 재랜더링이 발생하지 않는다.

<img width="194" alt="image" src="https://github.com/Fastcampus-Final-Team3/jober-frontend/assets/87072568/69c1b757-7c91-46c7-8e94-41ecbcaa42f6">

불변성을 지켜야한다는 의미는 얕은 비교를 하는 리액트의 특성상 참조형 데이터의 원본은 `변하지 않게` 유지해야하고 재랜더링을 위해 새로운 참조값을 set해야 함을 의미한다.

본 프로젝트에서는 wall(공용페이지에서 보여지는 모든 정보) 객체가 있다.

```ts
const wall = {
  category: 'personal',
  memberId: 1,
  spaceId: 1,
  shareURL: 'howooking',
  wallInfoBlock: {
    wallInfoBlockId: 9,
    wallInfoTitle: '이호우',
    wallInfoDescription: '안녕하세요. 고양이 개발자 이호우입니다.',
    wallInfoImgURL: 'https://avatars.githubusercontent.com/u/87072568?v=4',
    backgroundImgURL:
      'https://images.unsplash.com/photo-1696251143046-2d32fb985b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
  },
  blocks: [
    {
      blockUUID: '1108fff1-0106-4340-b505-280e15626ecc',
      blockType: 'listBlock',
      subData: [
        {
          listBlockId: 33,
          listLabel: '학력/경력',
          listTitle: '학력',
          listDescription: '서울대학교',
          isLink: false,
        },
      ],
    },
    ... 생략
```

공유 페이지에서 발생하는 모든 onChange 이벤트는 wall 내부 값들을 실시간을 변경시켜야 한다.

예를 들어 `wall.wallInfoBlock.wallInfoTitle`값을 새로운 값으로 변경하기 위해서는 다음과 같이 해야한다.

```jsx
setWall({
  ...wall,
  wallInfoBlock: { ...wall.wallInfoBlock, wallInfoTitle: '새로운 값' },
});
```

위와 같이 wall 객체의 깊이가 얕은 경우는 어렵지 않게 불변성을 지킬 수 있으나 깊이가 깊어짐에 따라 불변성을 지키는 것은 불가능에 가까워진다.

이 문제를 해결해주는 라이브러리가 `IMMER`다.

<img width="958" alt="image" src="https://github.com/Fastcampus-Final-Team3/jober-frontend/assets/87072568/c82ba4fa-41a8-4345-929b-793c15768adb">

`IMMER`를 사용하면 기존의 객체의 값를 다루는 문법을 사용하여 state를 업데이트 시켜줄 수 있다.

```js
import { produce } from 'immer';

setWall(
  produce(wall, (draft) => {
    draft.wallInfoBlock.wallInfoTitle = '새로운 값';
  }),
);
```
