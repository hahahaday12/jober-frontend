import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BestTemplate } from 'components/index';

interface ProductItem {
  id: number;
  title: string;
  description: string;
  tag: string;
}

interface Props {
  inputText: string;
}

export const SelecteSearchTemplate: React.FC<Props> = ({ inputText }) => {
  const [debouncedInputValue, setDebouncedInputValue] = useState('');
  const [filteredResults, setFilteredResults] = useState<ProductItem[]>([]);
  const [products, setProducts] = useState([]);

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
        const results = await fetch(`http://localhost:4001/search`);
        const data = await results.json();
        setProducts(data);
      };
      getData();
    } else {
      setProducts([]);
    }
  }, [debouncedInputValue]);

  useEffect(() => {
    // 입력값에 따라 필터링된 결과를 업데이트합니다.
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(debouncedInputValue.toLowerCase()),
    );
    setFilteredResults(filtered);
  }, [debouncedInputValue, products]);

  return (
    <>
      <SeleteContainer>
        <h3>검색결과</h3>
        <ResultBox>
          {filteredResults.map((item) => (
            <ResultTemBox key={item.id}>{item.title}</ResultTemBox>
          ))}
        </ResultBox>
        <BestTemplate />
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
  background-color: #108fdd;
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
