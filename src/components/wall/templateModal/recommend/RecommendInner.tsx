import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useMutation } from 'react-query';
import { Radio } from 'antd';
import { useTemplateStore } from '@/store';
import { templateText } from '@/textConstants';

type TemplateData = {
  templateId: string;
  id: string;
  title: string;
  description: string;
};

type BestTemplateProps = {
  PERSONAL: string;
};

const fetchTemplateData = async (PERSONAL: string) => {
  const response = await axios.get(`/api/wall/templates?category=${PERSONAL}`);
  return response.data.data.list;
};

export const BestTemplate: React.FC<BestTemplateProps> = ({ PERSONAL }) => {
  const [templateData, setTemplateData] = useState<TemplateData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setSelectedTemplate } = useTemplateStore();

  const { mutate } = useMutation(fetchTemplateData, {
    onMutate: () => {
      setIsLoading(true);
    },
    onError: (error) => {
      setIsError(true);
      console.error('API 호출 에러:', error);
      setIsLoading(false);
    },
    onSuccess: (data) => {
      setTemplateData(data);
      setIsLoading(false);
    },
  });

  useEffect(() => {
    mutate('PERSONAL');
  }, [mutate]);

  const handleRadioChange = (item: TemplateData, status: boolean) => {
    const param = {
      category: PERSONAL,
      id: item.id,
      title: item.title,
      description: item.description,
    };
    console.log(item);
    console.log(status);
    setSelectedTemplate(param);
  };

  return (
    <>
      <BestTemplateLayout>
        <TemplateHeader>
          <p>{templateText.recommendTemplate}</p>
        </TemplateHeader>
        <TemplateContainer>
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error fetching data</p>
          ) : (
            templateData.map((item) => (
              <TemplateBox key={item.id}>
                <Radio
                  onChange={(e) => handleRadioChange(item, e.target.checked)}
                />
                <p>{item.title}</p>
                <h3>{item.description}</h3>
              </TemplateBox>
            ))
          )}
        </TemplateContainer>
      </BestTemplateLayout>
    </>
  );
};

const BestTemplateLayout = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const TemplateHeader = styled.div`
  width: 60%;
  padding-bottom: 20px;
  display: flex;

  p {
    width: 112px;
    color: blue;
    font-weight: 500;
    font-size: 10px;
    height: 10px;
  }
`;

const TemplateContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 298px 298px;
  grid-template-rows: 90px 90px 90px;
  gap: 10px;
  grid-row-gap: 90px;
`;

const TemplateBox = styled.div`
  border-radius: 10px;
  margin-top: 20px;
  background-color: rgba(217, 217, 217, 1);
  width: 290px;
  position: relative;
  padding-bottom: 135px;

  p {
    width: 270px;
  }

  h3 {
    width: 275px;
    padding: 10px;
    padding-bottom: 20px;
    position: relative;
    margin-top: 5px;
  }
`;
