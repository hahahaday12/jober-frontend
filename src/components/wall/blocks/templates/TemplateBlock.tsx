import { useWallStore } from '@/store';
import { BlockContainer } from 'components/index';
import SingleTemplate from './SingleTemplate';
import { SubDatum } from '@/types/wall';
import { ModalOpen } from 'components/index';

export type TemplateBlockSubDataType = Pick<
  SubDatum,
  | 'templateBlockId'
  | 'templateUUID'
  | 'templateTitle'
  | 'templateDescription'
  | 'hasAccessTemplateAuth'
  | 'hasDenyTemplateAuth'
>;

type TemplateBlockProps = {
  blockUUID?: string;
  subData?: TemplateBlockSubDataType[];
  templateAddButtonRef: React.MutableRefObject<null>;
  onClick?: () => void;
};

export const TemplateBlock = ({
  subData: templateBlockSubData,
  templateAddButtonRef,
}: TemplateBlockProps) => {
  const { isEdit } = useWallStore();

  return (
    <BlockContainer blockName="templateBlock">
      <div
        className={`
        ${isEdit && 'px-[8px] pb-[8px] pt-[16px] sm:pt-[26px]'} 
        gap-[8px] grid sm:grid-cols-2 grid-cols-1
        `}
      >
        {templateBlockSubData?.map((template) => (
          <SingleTemplate
            key={template.templateUUID}
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
          </>
        )}
      </div>
    </BlockContainer>
  );
};
