import styled from 'styled-components';
import { templateText } from '@/textConstants';
import { useTemplateStore } from '@/store';

export const ModalContents = () => {
  const { selectedTemplate } = useTemplateStore();

  return (
    <div>
      <ContentsHeader>
        <p>{templateText.templateSetting}</p>
      </ContentsHeader>
      <ContentsCenter>
        <TitleBox>
          <h3>{templateText.templateTitle}</h3>
          <p>{selectedTemplate.templateTitle}</p>
        </TitleBox>
        <DescriptionBox>
          <h3>{templateText.templateDescription}</h3>
          <p>{selectedTemplate.templateDescription}</p>
        </DescriptionBox>
        <SelectFolder>
          <h3>{templateText.templateDescription}</h3>
          <p>{selectedTemplate.category}</p>
        </SelectFolder>
      </ContentsCenter>
    </div>
  );
};

const ContentsHeader = styled.div`
  max-width: 600px;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
  display: flex;

  p {
    width: 112px;
    margin: auto;
    font-weight: 800;
  }
`;

const ContentsCenter = styled.div`
  height: 400px;
  border: none;
  background-color: aliceblue;
  position: relative;
  top: 50px;
`;

const TitleBox = styled.div`
  padding-bottom: 10px;
  background-color: aqua;

  p {
    margin-top: 10px;
    font-size: 15px;
    font-weight: 800;
  }
`;
const DescriptionBox = styled(TitleBox)`
  margin-top: 10px;
`;
const SelectFolder = styled(DescriptionBox)``;
