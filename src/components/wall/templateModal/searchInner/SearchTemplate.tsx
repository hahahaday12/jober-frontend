import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BestTemplate } from 'components/index';
import { templateText } from '@/textConstants';
import axios from 'axios';

type ProductItem = {
  templateId: number;
  templateTitle: string;
  templateDescription: string;
}

type Props = {
  inputText: string;
}

export const SelecteSearchTemplate: React.FC<Props> = ({ inputText }) => {
  const [debouncedInputValue, setDebouncedInputValue] = useState('');
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    // 입력값이 변경될 때마다 debounce된 값을 업데이트.
    const debounceTimer = setTimeout(() => {
      setDebouncedInputValue(inputText);
    }, 300); // 300 밀리초(0.3초) 디바운스 시간

    return () => {
      // 이전 타이머를 클리어.
      clearTimeout(debounceTimer);
    };
  }, [inputText]);

  useEffect(() => {
    if (debouncedInputValue) {
      const getData = async () => {
        try {
          const response = await axios.get(`/api/api/wall/templates`, {
            params: {
              search: debouncedInputValue,
            },
          });
          const data = response.data.data.list;
          setProducts([...data]);
        } catch (error) {
          console.error('API 호출 에러:', error);
        }
      };
      getData();
    } else {
      setProducts([]);
    }
  }, [debouncedInputValue]);

  return (
    <>
      <SeleteContainer>
        <h3>{templateText.inputResult}</h3>
        <ResultBox>
          {products.map((item) => (
            <ResultTemBox key={item.templateId}>
              {item.templateTitle} <br />
              {item.templateDescription}
            </ResultTemBox>
          ))}
        </ResultBox>
        <BestTemplate PERSONAL={''} />
      </SeleteContainer>
    </>
  );
};

const SeleteContainer = styled.div`
  width: 100%;
  //background-color: orange;
  margin-top: 100px;
  position: absolute;

  h3 {
    font-weight: 800;
  }
`;

const ResultBox = styled.div`
  width: 90%;
  height: 210px;
  margin: auto;
  //background-color: #108fdd;
  max-height: 200px;
  overflow-y: auto;
`;

const ResultTemBox = styled.div`
  width: 100%;
  height: 90px;
  background-color: gray;
  border-radius: 10px;
  margin-top: 10px;
`;
