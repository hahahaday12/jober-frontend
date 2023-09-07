import { useState } from "react"
import styled from 'styled-components'


interface TemplateData {
  id:number,
  title:string,
  description:string
}


export default function BestTemplate () {

  const [templateData, ] = useState<TemplateData[]>([
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

  return(
    <>
    <BestTemplateLayout>
      <TemplateHeader>
        <p>추천 템플릿</p>
        <p>#추천 해시태그1</p>
        <p>#추천 해시태그2</p>
      </TemplateHeader>
      <TemplateContainer>
        {templateData.map((item) => (
          <TemplateBox>
            {item.title}<br/>
            {item.description}
          </TemplateBox>
        ))}
      </TemplateContainer>
    </BestTemplateLayout>
    </>
  )
}

const BestTemplateLayout = styled.div`
  width: 100%;
  //background-color: pink;
  //position: absolute;
  margin-top: 10px;
`
const TemplateHeader = styled.div`
  width: 60%;
  padding-bottom: 20px;
  //background-color: orange;
  display: flex;

  p {
    width: 112px;
    color: blue;
    font-weight: 500;
    font-size: 10px;
    height: 10px;
  }
`

const TemplateContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 295px 295px;
  grid-template-rows: 90px 90px 90px;
  gap: 5px;
`
const TemplateBox = styled.div`
  border-radius: 10px;
  margin-top: 10px;
  background-color: gray;
`