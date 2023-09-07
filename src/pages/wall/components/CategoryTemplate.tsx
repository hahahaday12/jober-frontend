import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListTemplete from './CategoryList';

type BookTypeArr = BookType[];

interface BookType {
  type: string;
  number: number;
}

const bookcategory: BookTypeArr = [
  { type: '개인', number: 1 },
  { type: '소개', number: 2 },
  { type: '카테고리1', number: 3 },
  { type: '카테고리2', number: 4 },
  { type: '카테고리3', number: 5 },
];


export default function CategoryTemplet() {

  const [type, setType] = useState<string>();

  useEffect(() => {
    const target = document.querySelectorAll('h1');

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setType(entry.target.id);
        }
      },
      { threshold: 0.3, rootMargin: `0px 0px -50% 0px` }
    );
    target.forEach((item) => {
      io.observe(item);
    });

    return () => {
      io.disconnect();
    };
  }, []);

  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const listItems = document.querySelectorAll('.Category-menu__text li');
    listItems.forEach((li) => {
      li.classList.remove('active');
    });

    event.currentTarget.parentElement?.classList.add('active');

    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return(
    <CategoryLayout>
      <Categorybox>
        <ul className="Category-menu__text">
          {bookcategory.map((item) => (
            <li
              key={item.number}
              className={item.type === type ? 'active' : ''}
            >
              <a href={`#${item.type}`}
              onClick={(e) => handleItemClick(e)}>
                {item.type}
              </a>
            </li>
          ))}
        </ul>
      </Categorybox>
      <TemplateList>
        {bookcategory.map((item) => (
          <ListTemplete key={item.number} category={item} />
        ))}
      </TemplateList>
    </CategoryLayout>
  )
}

const CategoryLayout = styled.div`
  width: 100%;
  position: absolute;
  height: 500px;
  margin-top: 90px;
  //padding-bottom: 10px;
  background-color: yellow;
  border-top: 1px solid gray;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

`

const Categorybox = styled.div`
  width: 20%;
  height: inherit;
  float: left;
  box-sizing: border-box;
 //background-color: aqua;
  border-right: 1px solid gray;

  .Category-menu__text{
    //background-color: tan;
    width: 110px;
    margin: auto;
    padding-bottom: 10px;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 6.8rem;
        margin-top: 5px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 15px;
        transition: background-color 0.3s;
      }
      .active {
        background-color: #15c6b7;
      }
  }
`
const TemplateList = styled.div`
  width: 80%;
  float: right;
  box-sizing: border-box;
  //background-color: blue;
  max-height: 500px;
  overflow-y: auto;
`