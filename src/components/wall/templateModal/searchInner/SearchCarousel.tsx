import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Carousel } from 'antd';

type TemplateItem = {
  templateId: number;
  templateTitle: string;
  templateDescription: string;
};

export const SearchCarousel = () => {
  const [templateData, setTemplateData] = useState<TemplateItem[]>([]);
  // const {
  //   data: templateData,
  //   // isLoading,
  //   // isError,
  // } = useQuery(
  //   ['templateData', 'PERSONAL'], // Use 'PERSONAL' as a query key
  //   () => fetchTemplateData('PERSONAL'), // Pass 'PERSONAL' as a parameter
  // );

  // useEffect(() => {
  //   fetchTemplateData('PERSONAL');
  // }, []);

  useEffect(() => {
    const fetchData = async (PERSONAL: string) => {
      try {
        const response = await axios.get(
          `/api/api/wall/templates?category=${PERSONAL}`,
        );
        const data = response.data.data.list;

        // Set the fetched data to your state
        setTemplateData(data);
      } catch (error) {
        console.error('API 호출 에러:', error);
      }
    };
    fetchData('PERSONAL');
  }, []);

  return (
    <>
      <Carousel className="calrouselBox">
        {templateData?.map((item) => (
          <TemplateBox key={item.templateId}>
            {item.templateTitle}
            {item.templateDescription}
          </TemplateBox>
        ))}
      </Carousel>
    </>
  );
};

const TemplateBox = styled.div`
  width: 420px;
  height: 120px;
  border-radius: 5px;
  margin-top: 10px;
  background-color: #f0f0f0;
  //background-color: aqua;
  padding: 10px;

  :where(.css-dev-only-do-not-override-847yc7).ant-carousel .slick-dots li {
    background-color: rgba(36, 147, 251, 1);
    color: yellow;
  }

  :where(.css-dev-only-do-not-override-847yc7).ant-carousel
    .slick-dots
    li.slick-active
    button {
    background: #f0f0f0;
    opacity: 1;
  }
`;
