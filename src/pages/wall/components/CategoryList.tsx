import  { useState } from "react";
import styled from 'styled-components';


interface Props {
  type: string;
  number: number;
}

export default function ListTemplete({ category }: { category: Props }) {
  const [list] = useState([
    {
      id:1,
      title:"템플릿1",
      description:"내용1"
    },
    {
      id:2,
      title:"템플릿2",
      description:"내용2"
    },
    {
      id:3,
      title:"템플릿3",
      description:"내용3"
    },
    {
      id:4,
      title:"템플릿4",
      description:"내용4"
    },
    {
      id:5,
      title:"템플릿5",
      description:"내용5"
    },
    {
      id:6,
      title:"템플릿6",
      description:"내용6"
    },
  ]);
  

  return (
      <Listbox>
        <div className="tag-box">
          <h1 id={category.type}>{category.type}</h1>
        </div>

        {list && list.map((item) => (
          <TemplateBox>
            {item.title}<br/>
            {item.description}
          </TemplateBox>
          ))}
      </Listbox>
  );
}

const Listbox = styled.div`
  //width: 100%;
  width: inherit;
  //background-color: rebeccapurple;
  margin-left: 20px;
 
  .tag-box{
    padding-bottom: 10px;
    //background-color: red;
    font-weight: 600;
    margin-top: 10px;
  }
`

const TemplateBox = styled.div`
  width: 420px;
  height: 90px;
  border-radius: 5px;
  margin-top: 10px;
  background-color: #DDDDDD;
`