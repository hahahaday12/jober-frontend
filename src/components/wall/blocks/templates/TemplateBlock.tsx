import { useWallStore } from '@/store';
import { SubDatumType } from '@/types/wall';
import { BlockContainer } from 'components/index';
import SingleTemplate from './SingleTemplate';
import { ModalOpen } from 'components/index';
import { useTemplateStore } from '@/store';
import { useEffect, useState } from 'react';

export type TemplateBlockSubDataType = Pick<
  SubDatumType,
  | 'templateTitle'
  | 'templateDescription'
  | 'hasAccessTemplateAuth'
  | 'hasDenyTemplateAuth'
  | 'templateBlockUUID'
>;

type TemplateBlockProps = {
  blockUUID?: string;
  subData?: TemplateBlockSubDataType[];
  templateAddButtonRef: React.MutableRefObject<null>;
  onClick?: () => void;
};

type TemplateItem = {
  category: string;
  templateId: string;
  templateTitle: string;
  templateDescription: string;
};

export const TemplateBlock = ({
  subData: templateBlockSubData,
  templateAddButtonRef,
}: TemplateBlockProps) => {
  const { isEdit } = useWallStore();
  const { selectedTemplate, newStatus } = useTemplateStore();
  const [templateHistory, setTemplateHistory] = useState<Array<TemplateItem>>(
    [],
  );
  useEffect(() => {
    if (newStatus) {
      setTemplateHistory((prevHistory) => [...prevHistory, selectedTemplate]);
    }
  }, [newStatus, selectedTemplate]);

  return (
    <BlockContainer blockName="templateBlock">
      <div
        className={`
        ${isEdit && 'px-[8px] pb-[8px] pt-[30px]'} 
        gap-4 grid sm:grid-cols-2 grid-cols-1
        `}
      >
        {templateBlockSubData?.map((template) => (
          <SingleTemplate
            key={template.templateBlockUUID}
            templateTitle={template.templateTitle}
            templateDescription={template.templateDescription}
          />
        ))}

        {isEdit && (
          <>
            <BlockContainer blockName="template">
              <div
                className="sm:h-[210px] h-[115px] flex flex-col items-center justify-center gap-[8px] dm-16 "
                ref={templateAddButtonRef}
              >
                <ModalOpen />
              </div>
            </BlockContainer>

            {templateHistory.map((template, index) => (
              <BlockContainer key={index} blockName="template">
                <div className="sm:h-[210px] h-[115px] p-block">
                  <div className="flex items-center justify-between mb-[12px]">
                    <h4 className="db-18 sm:db-20">{template.templateTitle}</h4>
                  </div>
                  <div className="flex sm:gap-[8px] gap-[6px]">
                    <p className="dm-16 text-gray88">
                      {template.templateDescription}
                    </p>
                  </div>
                </div>
              </BlockContainer>
            ))}
          </>
        )}
      </div>
    </BlockContainer>
  );
};
