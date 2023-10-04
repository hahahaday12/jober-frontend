import styled from 'styled-components';
import { Radio } from 'antd';
import { useTemplateStore } from '@/store';

type TemplateData = {
  templateId: string;
  templateTitle: string;
  templateDescription: string;
};

export const ListTemplete = ({ list, category }) => {
  const { selectedTemplate, setSelectedTemplate, setNewStatus } =
    useTemplateStore();

  const handleRadioChange = (item: TemplateData) => {
    if (item !== null) {
      const param = {
        category: category,
        templateId: item.templateId,
        templateTitle: item.templateTitle,
        templateDescription: item.templateDescription,
      };
      setSelectedTemplate(param);
      setNewStatus(false);
    }
  };

  return (
    <Listbox>
      {list.map((item: TemplateData) => (
        <TemplateBox key={item.templateId}>
          <TemplateHeader>
            <Radio
              onChange={() => handleRadioChange(item)}
              checked={
                selectedTemplate &&
                selectedTemplate.templateId === item.templateId
              }
            />
            {item.templateTitle}
          </TemplateHeader>

          <p className="innerListText">{item.templateDescription}</p>
        </TemplateBox>
      ))}
    </Listbox>
  );
};

const Listbox = styled.div`
  width: inherit;
  padding: 10px;
`;
const TemplateBox = styled.div`
  width: 420px;
  height: 120px;
  border-radius: 5px;
  margin-top: 10px;
  background-color: #f0f0f0;
  padding: 10px;

  .innerListText {
    width: auto;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(136, 136, 136, 1);
  }
`;

const TemplateHeader = styled.div`
  width: auto;
  height: 20px;
  display: flex;
  font-size: 14px;
  font-weight: 700;
`;
