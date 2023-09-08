import { useState } from "react"
import styled from 'styled-components'
import { BestTemplate } from 'components/index'

interface Result{
  id: number,
  title:string,
  description:string
}


export const SelecteSearchTemplate = ( ) => {

  const [result] = useState<Result[]>([
    {
      id: 1,
      title:"제목1",
      description:'내용입니당'
    },
    {
      id: 1,
      title:"제목2",
      description:'내용입니당'
    },
    
  ]) 
  return(
    <>
    <SeleteContainer>
      <h3>검색결과</h3>
      <ResultBox>
        {result.map((item) => (
          <ResultTemBox>
            {item.title}
          </ResultTemBox>
        ))}
      </ResultBox>
          <BestTemplate />
    </SeleteContainer>

    </>
  )
}

const SeleteContainer = styled.div`
  width: 100%;
  background-color: orange;
  margin-top: 100px;
  position: absolute;

  h3{
    font-weight: 800;
  }
`

const ResultBox = styled.div `
  width: 90%;
  height: 210px;
  margin: auto;
`

const ResultTemBox = styled.div`
  width: 100%;
  height: 90px;
  background-color: gray;
  border-radius: 10px;
  margin-top: 10px;
`